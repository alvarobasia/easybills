import React, { useEffect } from 'react';
import { IconButton } from "@chakra-ui/react";
import { BsTrash2 } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import { Bill } from './types';

const EditModal: React.FC<Bill> = (bill: Bill) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleDelete(){
    console.log("bill", bill);
  }

  useEffect(()=> {
    handleDelete()
  }, [bill]);

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
          <div>MODAL DE EDITAR</div>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditModal;