import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../contexts/AuthContext";
import { BillsProvider } from "../contexts/BillsContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <BillsProvider>
          <Component {...pageProps} />
        </BillsProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
export default MyApp;
