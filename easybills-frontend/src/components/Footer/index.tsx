import React from "react";
import { Box } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      fontFamily="Lexend Deca"
      position="fixed"
      bottom="0"
      display="flex"
      justifyContent="left"
      bg="transparent"
      w="100%"
      height="35px"
      p={1}
      color="#333"
      paddingLeft={8}
      fontSize={12}
    >
      Easybills &copy; [ UFOP - Universidade Federal de Ouro Preto{" "}
      {new Date().getFullYear}]
    </Box>
  );
};

export default Footer;
