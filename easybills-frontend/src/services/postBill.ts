import { api } from "./api";
import { CreateBill } from './types';

export const postBill = async (token: string, body: CreateBill) => {
  return await api.post("/bill", {
    body,
    headers: { Authorization: `Bearer ${token}` },
  });
};
