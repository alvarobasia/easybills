import React, { useState } from 'react';
import Router from 'next/router'
import Link from 'next/link'
import { Container, RegisterForm, BackgroundContainer, ConfirmButton, BackButton } from './styles';
import { BsFillPersonFill, BsFillLockFill, BsEnvelopeFill } from "react-icons/bs";
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import { registerUserService } from '../../services/registerUser';

const Register: React.FC = () => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleRegister(){
    event?.preventDefault();
    try{
      await registerUserService(name, email, password);
      window.alert(`Cadastro efetuado com sucesso!`)
      Router.push('/login');
    }catch(err: any){
      console.log(err.error);
    }
  }

  return (
    <Container>
      <RegisterForm onSubmit={handleRegister}>
        <img width="200px" src="./logo.svg" style={{ marginBottom: "30px" }} />
        <Input 
          icon={<BsFillPersonFill color="#575757" size="24"/>} 
          placeholder='Nome Completo' 
          value={name}
          type="text"
          onChange={(e: any) => setName(e.target.value)}
        />
        
        <Input 
          icon={<BsEnvelopeFill color="#575757" size="24"/>} 
          placeholder='exemplo@email.com' 
          value={email}
          type="email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        
        <Input 
          icon={<BsFillLockFill color="#575757" size="24"/>} 
          placeholder='********' 
          value={password}
          type="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        
        <ConfirmButton type="submit">
          Cadastrar
        </ConfirmButton>

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