import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { BsTrash2 } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import ModalBills from "../Modal";
export interface Bill {
  _id: string;
  date: string;
  name: string;
  amount: number;
  tags: string[];
  description: string;
  profit: boolean;
}

interface TableProps {
  bills: Bill[];
}

const TableBills: React.FC<TableProps> = ({ bills }: TableProps) => {
  const profitColors = ["#81f376", "#3e941c"];
  const lossColors = ["#e26060", "#c53131"];
  const { colorMode } = useColorMode();
  const [openModalDelete, setOpenModalDelete] = React.useState(false);
  function handleCloseModalDelete() {
    setOpenModalDelete(false);
  }
  return (
    <>
      <ModalBills
        open={openModalDelete}
        onCloseCallback={handleCloseModalDelete}
      />
      <Table fontFamily="Lexend Deca" variant="unstyled" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Descrição</Th>
            <Th>Data</Th>
            <Th>Tags</Th>
            <Th isNumeric>Valor</Th>
            <Th>Deletar</Th>
            <Th>Editar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bills.map((bill: Bill) => {
            const index = colorMode === "light" ? 0 : 1;
            const color = bill.profit ? profitColors[index] : lossColors[index];
            const date = new Date(bill.date);
            return (
              <Tr bg={color} borderRadius={"8px"} key={bill._id}>
                <Td>{bill.name}</Td>
                <Td>{bill.description}</Td>
                <Td>{`${date.getDate()}/${
                  date.getMonth() + 1
                }/${date.getFullYear()}`}</Td>
                <Td>{bill.tags.join(", ")}</Td>
                <Td isNumeric>{bill.amount}</Td>
                <Td>
                  <IconButton
                    onClick={() => setOpenModalDelete(true)}
                    aria-label="apagar"
                    variant="ghost"
                  >
                    <BsTrash2 />
                  </IconButton>
                </Td>
                <Td>
                  <IconButton aria-label="apagar" variant="ghost">
                    <FiEdit3 />
                  </IconButton>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Nome</Th>
            <Th>Descrição</Th>
            <Th>Data</Th>
            <Th>Tags</Th>
            <Th isNumeric>Valor</Th>
            <Th>Deletar</Th>
            <Th>Editar</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

export default TableBills;
