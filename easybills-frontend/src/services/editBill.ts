import { api } from "./api";
import { EditBill } from './types';

export const patchBillsBillsService = async (token: string, id: string, body: EditBill) => {
  return await api.patch("/bill?id=" + id, body, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
