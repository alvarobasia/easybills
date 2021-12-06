import React, { useState, useEffect, useContext } from 'react';
import { IconButton } from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
  useDisclosure,
  ModalHeader
} from '@chakra-ui/react';
import { useToast } from "@chakra-ui/react";

import { Body } from '../AddBillModal/styles';
import Item from '../AddBillModal/Item';
import TagItem from '../AddBillModal/TagItem';
import { patchBillsBillsService } from '../../services/editBill';
import { getCookie } from '../../helpers/cookie';
import { IProps } from './types';
import { BillsContext } from "../../contexts/BillsContext";

const EditBillModal: React.FC<IProps> = ({ bill }: IProps) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateBills } = useContext(BillsContext);
  const [name, setName] = useState<string>(bill.name);
  const [description, setDescription] = useState<string>(bill.description);
  const [amount, setAmount] = useState<string>(String(bill.amount));
  const [tag, setTag] = useState<string>('');
  const [tags, setTags] = useState<string[]>(bill.tags);

  useEffect(() => {
    if(tag[tag.length - 1] === ','){
      addTag(tag.split(',')[0]);
    }
  }, [tag]);

  function addTag(tagRef: string){
    const array = tags;
    array?.push(tagRef);
    setTags(array);
    setTag(' ');
  }

  function removeTag(remove: string){
    const array = tags;
    const newArray = array.filter((tag) => tag !== remove);
    setTags([...newArray]);
    setTag('');
  }

  async function handleEditBill(){
    try{
      const token = getCookie('token');
      await patchBillsBillsService(token, bill._id, {
        amount: Number(amount),
        description,
        name,
        tags,
      });
      toast({
        title: "Fatura editada com sucesso!",
        status: "success",
        isClosable: true,
        duration: 5000,
      });
      updateBills();
      onClose();
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
        <FiEdit3 />
      </IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Fatura</ModalHeader>
          <Body>
            <Item
              title='Nome'
              placeholder='Dê um nome para fatura'
              value={name}
              setValue={setName}
              type="text"
            />

            <Item
              title='Descrição'
              placeholder='Descrição breve do que se trata...'
              value={description}
              setValue={setDescription}
              type="textarea"
            />

            <Item
              title='Valor (R$)'
              placeholder='-20.00'
              value={amount}
              setValue={setAmount}
              type="number"
            />

            <TagItem
              title='Tags'
              placeholder='Separe as tags por vírgula'
              value={tag}
              setValue={setTag}
              removeTag={removeTag}
              tags={tags}
            />
          </Body>
          <ModalFooter>
            <Button variant='ghost' onClick={onClose}>Cancelar</Button>
            <Button colorScheme='blue' mr={3} onClick={handleEditBill}>
              Editar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditBillModal;