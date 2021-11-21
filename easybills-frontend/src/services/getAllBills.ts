import { api } from "./api";

export const getAllBillsService = async (token: string) => {
  return await api.get("/bill", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
