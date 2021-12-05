import React from 'react';
import { IProps } from './types';
import { Body } from './styles';

const Item: React.FC<IProps> = ({type, placeholder, title, value, setValue}: IProps) => {
  return (
    <Body>
      <span>{title}</span>
      {
        type === 'textarea'?
        <textarea 
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        :
        <input 
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={e => setValue(e.target.value)}
        />
      }
    </Body>
  );
}

export default Item;