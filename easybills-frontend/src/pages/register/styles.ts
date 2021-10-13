import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #FFF;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  min-width: 300px;
  height: 100%;
`;

export const BackgroundContainer = styled.div`
  width: 30vw;
  height: 100vh;
  background-image: url('./finance.jpg');
  background-position: center;
  background-size: cover;
  box-shadow: 0 0 10px 5px #3335;
`;

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  margin-top: 16px;
  background-color: #00BB2D;
  max-width: 350px;
  min-width: 250px;
  border-radius: 5px;

  :hover{
    background-color: #13AD37;
  }
`;

export const BackButton = styled.span`
  font-size: 14px;
  color: #333;
  margin-top: 8px;
`;