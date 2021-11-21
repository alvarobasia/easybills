import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BillDocument = Bill & Document;

@Schema({
  timestamps: true,
})
export class Bill {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  tags: string[];

  @Prop()
  amount: number;

  @Prop({ default: new Date() })
  date: Date;

  @Prop()
  profit: boolean;

  @Prop()
  userId: string;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
