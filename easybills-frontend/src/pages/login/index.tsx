import {
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
import Footer from '../../components/Footer';
import Link from 'next/link'

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
            textShadow:"2px 5px 5px #ddd",
          }}
        >
          gastos
        </span>{" "}
        e{" "}
        <span
          style={{
            color: "#00BB2D",
            fontSize: "64px",
            fontWeight: "bold",
            textShadow:"2px 5px 5px #ddd",
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
            bg="#00BB2D"
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
            Não possui uma conta? Se <Link href="/register">registre agora!</Link>
          </Text>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
