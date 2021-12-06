import React, { useState, useEffect, useContext } from "react";
import { IconButton } from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import { Body } from "./styles";
import Item from "./Item";
import TagItem from "./TagItem";
import { postBill } from "../../services/postBill";
import { getCookie } from "../../helpers/cookie";
import { BillsContext } from "../../contexts/BillsContext";

const AddBillModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const { updateBills } = useContext(BillsContext);
  useEffect(() => {
    if (tag[tag.length - 1] === ",") {
      addTag(tag.split(",")[0]);
    }
  }, [tag]);

  function addTag(tagRef: string) {
    const array = tags;
    array?.push(tagRef);
    setTags(array);
    setTag(" ");
  }

  function removeTag(remove: string) {
    const array = tags;
    const newArray = array.filter((tag) => tag !== remove);
    setTags([...newArray]);
    setTag("");
  }

  async function handleAddBill() {
    try {
      const token = getCookie("token");
      const response = await postBill(token, {
        amount: Number(amount),
        date: new Date(),
        description,
        name,
        tags,
      });
      updateBills();
      onClose();
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <>
      <IconButton onClick={onOpen} aria-label="apagar" variant="ghost">
        <AiOutlinePlusCircle />
      </IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Fatura</ModalHeader>
          <Body>
            <Item
              title="Nome"
              placeholder="Dê um nome para fatura"
              value={name}
              setValue={setName}
              type="text"
            />

            <Item
              title="Descrição"
              placeholder="Descrição breve do que se trata..."
              value={description}
              setValue={setDescription}
              type="textarea"
            />

            <Item
              title="Valor (R$)"
              placeholder="-20.00"
              value={amount}
              setValue={setAmount}
              type="number"
            />

            <TagItem
              title="Tags"
              placeholder="Separe as tags por vírgula"
              value={tag}
              setValue={setTag}
              removeTag={removeTag}
              tags={tags}
            />
          </Body>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleAddBill}>
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddBillModal;
