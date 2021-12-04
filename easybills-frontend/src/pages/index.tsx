import React, { useEffect, useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AiOutlineCheckCircle } from "react-icons/ai";

import MainCards from "../components/MainCards";
import Header from '../components/Header';
import { getAllBillsService } from "../services/getAllBills";
import TableBills from "../components/Table";
import { Bill } from "../components/Table/types";

const Home: NextPage = () => {
  const colorText = useColorModeValue("#505050", "#ffffff");
  const [bills, setBills] = useState<Bill[]>([]);

  useEffect(() => {
    getAllBillsService(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNzc0BzbWFpbC5jb20iLCJzdWIiOiI2MTlhMzlkOGQ5OWNkNjA2OWQzMzQzMDYiLCJuYW1lIjoiYWx2YXJvIiwiaWF0IjoxNjM3NTAxNzUxLCJleHAiOjE2NDAwOTM3NTF9.u6zPxw-zbfN5VNJ5r2ZfRQioUPm7MBnfjgyH6SnVo8I"
    ).then((e) => {
      setBills(e.data);
    });
  }, []);
  
  return (
    <>
      <Header />
      <Box w="90%" margin="15px auto" display="flex" style={{ gap: "15px" }}>
        <MainCards
          title={"Entradas"}
          colors={["#81f376", "#3e941c"]}
          icon={
            <AiOutlineCheckCircle size={36} style={{ marginBottom: "10px" }} />
          }
          value={444}
        />
        <MainCards
          title={"Saídas"}
          colors={["#e26060", "#c53131"]}
          icon={
            <AiOutlineCheckCircle size={36} style={{ marginBottom: "10px" }} />
          }
          value={444}
        />
        <MainCards
          title={"Total"}
          colors={["#eea950", "#6b4b0a"]}
          icon={
            <AiOutlineCheckCircle size={36} style={{ marginBottom: "10px" }} />
          }
          value={444}
        />
      </Box>
      <Box
        w="95%"
        margin="15px auto"
        padding="5px"
        border={`2px solid ${colorText}`}
        borderRadius={8}
        maxHeight="50vh"
        overflowY="scroll"
      >
        <TableBills bills={bills} />
      </Box>
    </>
  );
};

export default Home;
