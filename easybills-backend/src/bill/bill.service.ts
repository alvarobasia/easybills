import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Scope,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBillDto } from './dto/create-bill.dto';
import { Bill, BillDocument } from './entities/bill.entity';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { UpdateBillDto } from './dto/update-bill.dto';

@Injectable({ scope: Scope.REQUEST })
export class BillService {
  constructor(
    @Inject(REQUEST) private request: Request,
    @InjectModel(Bill.name) private readonly billModel: Model<BillDocument>,
  ) {}

  async create(createBillDto: CreateBillDto) {
    if (!createBillDto.amount) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Deve haver uma quantia',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!createBillDto.date) {
      createBillDto.date = new Date();
    }

    if (!createBillDto.description) {
      createBillDto.description = 'Sem descrição';
    }

    if (!createBillDto.name) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Deve haver um nome',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const bill = new this.billModel(createBillDto);
    bill.userId = (this.request.user as any).id;
    bill.profit = createBillDto.amount > 0;
    return await bill.save();
  }

  findAllByUser() {
    return this.billModel.find({ userId: (this.request.user as any).id });
  }

  // findOne(id: number) {}

  async update(
    id: number,
    { amount, date, description, name, tags }: UpdateBillDto,
  ) {
    let bill = undefined;

    bill = await this.billModel
      .findOneAndUpdate(
        {
          _id: id,
        },
        {
          amount,
          date,
          description,
          name,
          profit: amount > 0,
          tags,
        },
        { new: true },
      )
      .exec();

    if (!bill) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Não foi encontrado',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return bill;
  }

  async remove(id: string) {
    return await this.billModel.findOneAndDelete({ _id: id });
  }
}
