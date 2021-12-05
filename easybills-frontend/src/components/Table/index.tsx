import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tr,
  Th,
} from "@chakra-ui/react";
import { TableProps } from './types';
import TableList from '../TableList';

const TableBills: React.FC<TableProps> = ({ bills }: TableProps) => {

  return (
    <>
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
        <TableList bills={bills}/>
      </Table>
    </>
  );
};

export default TableBills;
