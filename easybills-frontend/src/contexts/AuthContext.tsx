import { createContext, PropsWithChildren, useState } from "react";
import { loginService } from "../services/login";
import { useToast } from "@chakra-ui/react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
type AuthContextType = {
  isAuthenticated: boolean;
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const toast = useToast();

  async function singIn(email: string, password: string) {
    try {
      const { data } = await loginService(email, password);
      setCookie(null, "token", data.access_token);
      setUser({ id: data.id, username: data.name, email: data.email });
      setIsAuthenticated(true);
    } catch (err) {
      toast({
        title: "Login inválido",
        status: "error",
        isClosable: true,
        duration: 5000,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, singIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}
