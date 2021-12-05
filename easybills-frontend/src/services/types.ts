export interface CreateBill {
  amount: number
  tags: string[]
  name: string
  date: Date
  description: string
}