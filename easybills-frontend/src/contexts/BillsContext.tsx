import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

import { getAllBillsService } from "../services/getAllBills";
import { Bill } from "../components/Table/types";
import { getCookie } from "../helpers/cookie";
type BillsContextType = {
  bills: Bill[];
  updateBills: () => void;
};

export type User = {
  id: string;
  username: string;
  email: string;
};

export const BillsContext = createContext({} as BillsContextType);

export function BillsProvider(props: PropsWithChildren<any>) {
  const [bills, setBills] = useState<Bill[]>([]);
  const toast = useToast();

  useEffect(() => {
    getAllBillsService(getCookie("token")).then((e) => {
      setBills(e.data);
    });
  }, []);

  function updateBills() {
    getAllBillsService(getCookie("token")).then((e) => {
      setBills(e.data);
    });
  }

  return (
    <BillsContext.Provider value={{ bills, updateBills }}>
      {props.children}
    </BillsContext.Provider>
  );
}
