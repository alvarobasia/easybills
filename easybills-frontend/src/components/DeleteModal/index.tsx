import React from 'react';
import { IconButton } from "@chakra-ui/react";
import { BsTrash2 } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
  useDisclosure,
  ModalHeader
} from '@chakra-ui/react';
import { IProps } from './types';
import { deleteBillsBillsService } from '../../services/deleteBill';
import { getCookie } from '../../helpers/cookie';

const DeleteModal: React.FC<IProps> = ({ bill }: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  async function handleDelete(){
    try{
      const token = getCookie('token');
      console.log("bill", bill);
      const response = await deleteBillsBillsService(token, bill._id);
      console.log("response", response);
    }catch(err: any){
      console.log(err.message);
    }
  }

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="apagar"
        variant="ghost"
      >
        <BsTrash2 />
      </IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deseja deletar a fatura?</ModalHeader>
          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme='red' onClick={handleDelete}>
              Deletar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteModal;