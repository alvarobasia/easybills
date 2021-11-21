import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import MainCards from "../components/MainCards";
import NameBar from "../components/NameBar";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { getAllBillsService } from "../services/getAllBills";
import TableBills, { Bill } from "../components/Table";
const Home: NextPage = () => {
  const color = useColorModeValue("#7ae5ec", "#1b617c");
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
      <Box
        fontFamily="Lexend Deca"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg={color}
        w="100%"
        height="10vh"
        p={1}
        padding="10px"
        color="green"
      >
        <Text
          marginLeft="5px"
          as="h2"
          fontFamily="Lexend Deca"
          fontSize="3xl"
          color={colorText}
        >
          Easybills
        </Text>
        <NameBar />
      </Box>
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
