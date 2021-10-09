import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
    return { id: savedUser._id, name: savedUser.name, email: savedUser.email };
  }

  async findOne(email: string): Promise<User | undefined> {
    const user = await this.userModel
      .findOne({
        email,
      })
      .exec();
    return user || undefined;
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findOneAndDelete({ _id: id });
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
