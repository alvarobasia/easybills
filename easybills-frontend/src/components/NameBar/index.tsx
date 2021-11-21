import React, { useContext } from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import {
  IconButton,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { AuthContext } from "../../contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useRouter } from "next/router";

const NameBar: React.FC = () => {
  const { user } = useContext(AuthContext);
  const { toggleColorMode, colorMode } = useColorMode();
  const router = useRouter();
  const colorText = useColorModeValue("#505050", "#ffffff");
  return (
    <Box display="flex" alignItems="center" style={{ gap: "15px" }}>
      <Text as="p" color={colorText} fontSize="2xl">
        Olá, alvaro {user?.username}
      </Text>
      <Stack
        as="div"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        w="70px"
      >
        <Text
          marginLeft="5px"
          as="p"
          fontFamily="Lexend Deca"
          fontSize="small"
          color={colorText}
        >
          {colorMode === "light" ? <FiSun size={22} /> : <FaMoon size={22} />}
        </Text>
        <Switch paddingBottom="5px" onChange={toggleColorMode} size="md" />
      </Stack>
      <IconButton
        onClick={() => {
          router.push("/login");
        }}
        variant="unstyled"
        colorScheme="teal"
        fontSize="20px"
        aria-label="Menu"
        color={colorText}
        icon={<FiLogOut size={22} />}
      />
    </Box>
  );
};

export default NameBar;
