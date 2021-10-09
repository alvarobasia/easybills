import { Button, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import { BiAccessibility } from "react-icons/bi";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default Home;
