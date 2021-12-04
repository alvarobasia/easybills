import React from 'react';
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

import NameBar from "../NameBar";

const Header: React.FC = () => {
  const color = useColorModeValue("#7ae5ec", "#1b617c");
  const colorText = useColorModeValue("#505050", "#ffffff");

  return (
    <Box
      fontFamily="Lexend Deca"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg={color}
      w="100%"
      height="10vh"
      p={1}
      padding="10px"
      color="green"
    >
      <Text
        marginLeft="5px"
        as="h2"
        fontFamily="Lexend Deca"
        fontSize="3xl"
        color={colorText}
      >
        Easybills
      </Text>
      <NameBar />
    </Box>
  );
}

export default Header;