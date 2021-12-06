import React, { useContext, useEffect, useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AiOutlineCheckCircle } from "react-icons/ai";

import MainCards from "../components/MainCards";
import Header from "../components/Header";
import { getAllBillsService } from "../services/getAllBills";
import TableBills from "../components/Table";
import { Bill } from "../components/Table/types";
import { getCookie } from "../helpers/cookie";
import AddBillModal from "../components/AddBillModal";
import { BillsContext } from "../contexts/BillsContext";

const Home: NextPage = () => {
  const colorText = useColorModeValue("#505050", "#ffffff");
  const { bills } = useContext(BillsContext);
  const [out, setOut] = useState<number>(0);
  const [entry, setEntry] = useState<number>(0);

  useEffect(() => {
    if (bills) getMinMax(bills);
  }, [bills]);

  function getMinMax(bills: Bill[]) {
    let pos = 0;
    let neg = 0;
    for (let i = 0; i < bills.length; i++) {
      if (bills[i].amount >= 0) {
        pos += bills[i].amount;
      } else {
        neg += bills[i].amount;
      }
    }
    setOut(neg);
    setEntry(pos);
  }

  if (!bills) return <div>s</div>;

  return (
    <>
      <Header />
      <Box 
        w="100%" 
        margin="15px auto" 
        padding="16px"
        display="flex" 
        flexDirection="row"
        justifyContent="center"
        flexWrap="wrap"
        style={{ gap: "15px" }}
      >
        <MainCards
          title={"Entradas"}
          colors={["#81f376", "#3e941c"]}
          icon={
            <AiOutlineCheckCircle size={36} style={{ marginBottom: "10px" }} />
          }
          value={entry}
        />
        <MainCards
          title={"Saídas"}
          colors={["#e26060", "#c53131"]}
          icon={
            <AiOutlineCheckCircle size={36} style={{ marginBottom: "10px" }} />
          }
          value={out}
        />
        <MainCards
          title={"Total"}
          colors={["#eea950", "#6b4b0a"]}
          icon={
            <AiOutlineCheckCircle size={36} style={{ marginBottom: "10px" }} />
          }
          value={out + entry}
        />
      </Box>
      <Box
        w="95%"
        margin="0 auto"
        borderRadius={8}
        justifyContent="flex-end"
        alignItems="flex-end"
        display="flex"
      >
        <AddBillModal />
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
        {bills && <TableBills bills={bills} />}
      </Box>
    </>
  );
};

export default Home;
