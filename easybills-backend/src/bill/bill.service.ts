import { Injectable } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Injectable()
export class BillService {
  create(createBillDto: CreateBillDto) {}

  findAll() {}

  findOne(id: number) {}

  update(id: number, updateBillDto: UpdateBillDto) {}

  remove(id: number) {}
}
