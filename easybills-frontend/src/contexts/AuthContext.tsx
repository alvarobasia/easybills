import { createContext, PropsWithChildren, useState } from "react";
import Router from "next/router";

type AuthContextType = {
  isAuthenticated: boolean;
  error: boolean;
  loading: boolean;
  user: User | null;
  singIn: (email: string, password: string) => void;
};

export type User = {
  id: string;
  username: string;
  email: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider(props: PropsWithChildren<any>) {
  const isAuthenticated = false;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);

  async function singIn(email: string, password: string) {}

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, error: errorState, loading, user, singIn }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
