import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
`;

export const Item = styled.div`
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

  .container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  .tagContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    span{
      background: #555;
      border-radius: 100px;
      padding: 4px 8px;
      margin: 4px;
      margin-top: 0;

      b{
        background: #FFF3;
        border-radius: 50%;
        color: #555;
        padding: 2px 6px;
        font-size: 12px;
        cursor: pointer;

        &:hover{
          background: #FFF8;
        }
      }
    }
  }
`;