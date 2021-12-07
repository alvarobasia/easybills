export interface CreateBill {
  amount: number
  tags: string[]
  name: string
  date: Date
  description: string
}

export interface EditBill {
  amount?: number
  tags?: string[]
  name?: string
  date?: Date
  description?: string
}