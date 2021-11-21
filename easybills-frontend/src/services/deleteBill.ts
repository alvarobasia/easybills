import { api } from "./api";

export const deleteBillsBillsService = async (token: string, id: string) => {
  return await api.delete("/bill?id=" + id, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
