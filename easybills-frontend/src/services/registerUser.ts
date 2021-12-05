import { api } from "./api";

export const registerUserService = async (name: string, email: string, password: string) => {
  return await api.post("/user/new", { name, email, password });
};
