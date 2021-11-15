import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Bill & Document;

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
}

export const UserSchema = SchemaFactory.createForClass(Bill);
