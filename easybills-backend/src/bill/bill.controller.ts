import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createBillDto: CreateBillDto) {
    return await this.billService.create(createBillDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.billService.findAllByUser();
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateBillDto: UpdateBillDto) {
    return await this.billService.update(id, updateBillDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return await this.billService.remove(id);
  }
}
