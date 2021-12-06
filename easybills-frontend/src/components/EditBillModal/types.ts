export interface IProps{
  bill: Bill
}

export interface Bill {
  _id: string;
  date: string;
  name: string;
  amount: number;
  tags: string[];
  description: string;
  profit: boolean;
}