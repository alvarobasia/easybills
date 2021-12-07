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
import { levelDatabase } from 'src/main';
import { getLevel } from 'src/utils/get-level';

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

    try {
      const billsOnLevel = await levelDatabase.get(`bills`);
      levelDatabase.put(`bills`, [...billsOnLevel, bill]);
    } catch (e) {
      levelDatabase.put(`bills`, [bill]);
    }

    return await bill.save();
  }

  async findAllByUser() {
    const bills = await getLevel('bills');

    const billsByUser = bills.filter(
      (bill) => (bill.userId = (this.request.user as any).id),
    );

    return this.billModel.find({ userId: (this.request.user as any).id });
  }

  // findOne(id: number) {}

  async update(
    id: string,
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

    const bills = await getLevel('bills');

    const otherBills = bills.filter((bill) => bill._id !== id);

    levelDatabase.put('bills', [...otherBills, bill]);

    return bill;
  }

  async remove(id: string) {
    const bills = await getLevel('bills');

    const otherBills = bills.filter((bill) => bill._id !== id);

    levelDatabase.put('bills', [...otherBills]);

    return await this.billModel.findOneAndDelete({ _id: id });
  }
}
