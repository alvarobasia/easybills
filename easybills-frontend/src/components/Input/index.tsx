import React from 'react';

import { Container, Field } from './styles';

interface IProps{
  icon?: any
  placeholder?: string
}

const Input: React.FC<IProps> = ({ icon, placeholder }: IProps) => {
  return (
    <Container>
      {icon}
      <Field placeholder={placeholder} />
    </Container>
  );
}

export default Input;