import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

interface ModalProps {
  open: boolean;
  onCloseCallback: () => void;
  billId: string;
}

const ModalBills: React.FC<ModalProps> = ({
  open,
  onCloseCallback,
  billId,
}: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (open) {
      onOpen();
    }
  }, [open]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          onCloseCallback();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Apagar entrada</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Deseja realmente apagar essa entrada?</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                onClose();
                onCloseCallback();
              }}
            >
              Deletar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBills;
