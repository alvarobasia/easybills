import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

import { Bill } from "../components/Table";
import { getAllBillsService } from "../services/getAllBills";
import { deleteBillsBillsService } from "../services/deleteBill";
type BillsContextType = {
  getBills: () => Bill[];
  deleteBill: (id: string) => void;
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
    getAllBillsService(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNzc0BzbWFpbC5jb20iLCJzdWIiOiI2MTlhMzlkOGQ5OWNkNjA2OWQzMzQzMDYiLCJuYW1lIjoiYWx2YXJvIiwiaWF0IjoxNjM3NTAxNzUxLCJleHAiOjE2NDAwOTM3NTF9.u6zPxw-zbfN5VNJ5r2ZfRQioUPm7MBnfjgyH6SnVo8I"
    ).then((e) => {
      setBills(e.data);
      toast({
        title: "Entrada apagada com sucesso",
        status: "success",
        isClosable: true,
        duration: 5000,
      });
    });
  }, []);

  const getBills = () => bills;

  const deleteBill = (id: string) => {
    deleteBillsBillsService(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNzc0BzbWFpbC5jb20iLCJzdWIiOiI2MTlhMzlkOGQ5OWNkNjA2OWQzMzQzMDYiLCJuYW1lIjoiYWx2YXJvIiwiaWF0IjoxNjM3NTAxNzUxLCJleHAiOjE2NDAwOTM3NTF9.u6zPxw-zbfN5VNJ5r2ZfRQioUPm7MBnfjgyH6SnVo8I",
      id
    ).then(() => {
      setBills(bills.filter((bill) => bill._id !== id));
    });
  };

  return (
    <BillsContext.Provider value={{ getBills, deleteBill }}>
      {props.children}
    </BillsContext.Provider>
  );
}
