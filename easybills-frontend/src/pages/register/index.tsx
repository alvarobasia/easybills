import React from 'react';
import Link from 'next/link'
import { Container, RegisterForm, BackgroundContainer, ConfirmButton, BackButton } from './styles';
import { BsFillPersonFill, BsFillLockFill, BsEnvelopeFill } from "react-icons/bs";
import Input from '../../components/Input';
import Footer from '../../components/Footer';

const Register: React.FC = () => {
  return (
    <Container>
      <RegisterForm>
        <img width="200px" src="./logo.svg" style={{ marginBottom: "30px" }} />
        <Input 
          icon={<BsFillPersonFill color="#575757" size="24"/>} 
          placeholder='Nome Completo' />
        
        <Input 
          icon={<BsEnvelopeFill color="#575757" size="24"/>} 
          placeholder='exemplo@email.com' />
        
        <Input 
          icon={<BsFillLockFill color="#575757" size="24"/>} 
          placeholder='********' />
        
        <ConfirmButton>Cadastrar</ConfirmButton>
        <BackButton>
          Já está cadastrado? <Link href="/login">Clique aqui</Link>
        </BackButton>
      </RegisterForm>
      <BackgroundContainer/>
      <Footer />
    </Container>
  );
}

export default Register;