import React from 'react';
import {
  Tbody,
  Tr,
  Td,
  useColorMode
} from "@chakra-ui/react";
import { Bill, TableProps } from '../Table/types';
import DeleteModal from '../DeleteModal';
import EditBillModal from '../EditBillModal';

const TableList: React.FC<TableProps> = ({ bills }: TableProps) => {
  const profitColors = ["#81f376", "#3e941c"];
  const lossColors = ["#e26060", "#c53131"];
  const { colorMode } = useColorMode();

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
              <DeleteModal bill={bill} />
            </Td>
            <Td>
              <EditBillModal bill={bill}/>
            </Td>
          </Tr>
        );
      })}
    </Tbody>
  );
}

export default TableList;