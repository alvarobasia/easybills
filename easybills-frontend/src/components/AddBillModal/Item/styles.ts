import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 8px;
  width: 100%;

  span{
    font-size: 12px;

  }

  input, textarea{
    display: flex;
    width: 100%;
    border-radius: 4px 0px 4px 0px;
    color: #333;
    padding: 8px 16px;
    font-size: 14px;

    &::placeholder{
      color: #A5A5A5;
    }
  }
  
  input {
    height: 40px;
  }

  textarea{
    height: 80px;
  }
`;