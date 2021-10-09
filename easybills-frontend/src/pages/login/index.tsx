import {
  Box,
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsFillPersonFill, BsFillLockFill } from "react-icons/bs";
import React from "react";
import styles from "./styles.module.scss";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Text
        as="h1"
        fontFamily="Lexend Deca"
        fontSize="5xl"
        width="50%"
        top="30%"
        zIndex="2"
        marginTop="5px"
        left="10%"
        color="#505050"
        position="absolute"
      >
        O lugar certo para seu controlar seus{" "}
        <span
          style={{
            fontSize: "64px",
            color: "red",
            fontWeight: "bold",
          }}
        >
          gastos
        </span>{" "}
        e{" "}
        <span
          style={{
            color: "#4FFF78",
            fontSize: "64px",
            fontWeight: "bold",
          }}
        >
          lucros
        </span>
      </Text>
      <div className={styles.container}>
        <video
          muted
          autoPlay
          loop
          style={{
            width: "60%",
            height: "100%",
            padding: "0",
            opacity: "0.4",
          }}
        >
          <source src="/finance.mp4" />
        </video>
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          margin="0 auto"
          width="40%"
          height="90%"
        >
          <img width="45%" src="./logo.svg" style={{ marginBottom: "30px" }} />
          <Stack spacing={4} marginBottom="15px" width="100%">
            <InputGroup
              fontFamily="Lexend Deca"
              size="lg"
              boxShadow="3px 3px 15px #ddd"
            >
              <InputLeftElement
                pointerEvents="none"
                children={<BsFillPersonFill color="#575757" />}
              />
              <Input type="text" placeholder="Email" />
            </InputGroup>
          </Stack>

          <Stack spacing={4} marginBottom="20px" width="100%">
            <InputGroup
              fontFamily="Lexend Deca"
              size="lg"
              boxShadow="3px 3px 15px #ddd"
            >
              <InputLeftElement
                pointerEvents="none"
                children={<BsFillLockFill color="#575757" />}
              />
              <Input type="password" placeholder="Senha" />
            </InputGroup>
          </Stack>

          <Button
            fontFamily="Lexend Deca"
            width="100%"
            bg="#4FFF78"
            color="#fff"
            _hover={{
              backgroundColor: "#13AD37",
            }}
            size="lg"
          >
            Entrar
          </Button>
          <Text
            as="p"
            color="#575757dd"
            fontFamily="Lexend Deca"
            fontSize="medium"
            marginTop="5px"
          >
            Não possui uma conta? Se registre agora!
          </Text>
        </Container>
      </div>
      <Box
        fontFamily="Lexend Deca"
        position="fixed"
        bottom="0"
        display="flex"
        justifyContent="center"
        bg="#575757"
        w="100%"
        height="35px"
        p={1}
        color="white"
      >
        Easybills &copy; Desenvolvido com ❤️ por Álvaro Basílio
      </Box>
    </>
  );
};

export default Home;
