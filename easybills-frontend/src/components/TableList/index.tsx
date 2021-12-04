import React from 'react';
import { FiEdit3 } from "react-icons/fi";
import {
  Tbody,
  Tr,
  Td,
  IconButton,
  useColorMode
} from "@chakra-ui/react";
import { Bill, TableProps } from '../Table/types';
import DeleteModal from '../DeleteModal';

const TableList: React.FC<TableProps> = ({ bills }: TableProps) => {
  const profitColors = ["#81f376", "#3e941c"];
  const lossColors = ["#e26060", "#c53131"];
  const { colorMode } = useColorMode();
  const [openModalDelete, setOpenModalDelete] = React.useState(false);

  return (
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
              <DeleteModal />
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
  );
}

export default TableList;