import { api } from "./api";

export const loginService = async (email: string, password: string) => {
  return await api.post("/user/login", { username: email, password });
};
