import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { use } from 'passport';
import { levelDatabase } from 'src/main';
import { getLevel } from 'src/utils/get-level';
import { hashPassword } from 'src/utils/hash-password';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(name: string, email: string, password: string) {
    [email, name, password].forEach((field) => {
      if (!field) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Os campos nome, email e senha são obrigatórios',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    });

    if (!password) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'A senha não pode ser vazia',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const userWithSameEmail = await this.userModel
      .findOne({
        email,
      })
      .exec();

    if (userWithSameEmail) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Email já utilizado',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await hashPassword(password);

    const userCreated = new this.userModel({
      email,
      name,
      password: hashedPassword,
    });
    const savedUser = await userCreated.save();

    //level

    levelDatabase.put(`${savedUser.email}`, {
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      password: hashedPassword,
    });

    return { id: savedUser._id, name: savedUser.name, email: savedUser.email };
  }

  async findOne(email: string): Promise<User | undefined> {
    let user = await this.userModel
      .findOne({
        email,
      })
      .exec();

    //level

    user = await getLevel(email);

    return user || undefined;
  }

  async delete(id: string): Promise<User> {
    let user = await this.userModel.findOneAndDelete({ _id: id });

    //level

    for await (const [, value] of levelDatabase.iterator() as any) {
      if (value?._id && value._id === id) {
        user = value;
      }
    }

    levelDatabase.del(`${user.email}`);

    return user;
  }

  async updateUser(
    id: string,
    email: string,
    name: string,
  ): Promise<User | undefined> {
    let user = undefined;
    try {
      user = await this.userModel
        .findOneAndUpdate(
          {
            _id: id,
          },
          {
            email,
            name,
          },
          { new: true },
        )
        .exec();

      //level
      const oldUser = await getLevel(email);

      const password = oldUser.password;
      levelDatabase.del(`${oldUser.email}`);

      levelDatabase.put(`${user.email}`, {
        _id: user._id,
        name: user.name,
        email: user.email,
        password,
      });
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Usuário ${name} não existe!`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return user || undefined;
  }
}
