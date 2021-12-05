import React from 'react';
import { IProps } from './types';
import { Body } from './styles';

const Item: React.FC<IProps> = ({placeholder, title, value, setValue, removeTag, tags}: IProps) => {
  return (
    <Body>
      <span>{title}</span>
      <div className="container">
        <div className="tagContainer">
          {
            tags.map((item, index) => {
              return(
                <span key={index}>
                  {item} 
                  <b onClick={() => removeTag(item)}>x</b>
                </span>
              )
            })
          }
        </div>
        <input 
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </Body>
  );
}

export default Item;