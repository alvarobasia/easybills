import React, { InputHTMLAttributes } from 'react';

import { Container, Field } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
  icon?: any
}

const Input: React.FC<IProps> = (props: IProps) => {
  const { icon } = props;
  return (
    <Container>
      {icon}
      <Field 
        {...props}
      />
    </Container>
  );
}

export default Input;