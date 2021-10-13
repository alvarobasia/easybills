import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 1px 1px 10px #3333;
  width: 100%;
  max-width: 350px;
  min-width: 250px;
  height: 48px;
  padding: 4px 12px;
  margin: 4px 0px;
`;

export const Field = styled.input`
  width: 100%;
  height: 100%;
  padding: 4px 8px;
  outline: none;
  color: #333;
  font-size: 14px;
  margin-left: 8px;

  ::placeholder{
    color: #3338;
  }
`;