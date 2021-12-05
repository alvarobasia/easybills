import { Box, Text, Stack } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';

interface MainCardsProps {
  title: string;
  value: number;
  icon: any;
  colors: [string, string];
}

const MainCards: React.FC<MainCardsProps> = ({
  icon,
  title,
  value,
  colors,
}: MainCardsProps) => {
  const colorText = useColorModeValue("#505050", "#ffffff");
  const cardColor = useColorModeValue(colors[0], colors[1]);
  return (
    <Box w="30vw" height="180px" bgColor={cardColor} borderRadius={8}>
      <Stack
        spacing={4}
        display="flex"
        w="100%"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding=" 
        0 10px"
      >
        <Text color={colorText} fontSize="4xl" fontFamily="Lexend Deca">
          {title}
        </Text>
        <Text color={colorText} fontSize="4xl" fontFamily="Lexend Deca">
          {icon}
        </Text>
      </Stack>
      <Box>
        {" "}
        <Text
          color={colorText}
          fontSize="5xl"
          padding="15px"
          fontFamily="Lexend Deca"
        >
          R${value.toFixed(2)}
        </Text>
      </Box>
    </Box>
  );
};

export default MainCards;
