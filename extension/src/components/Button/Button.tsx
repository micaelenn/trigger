import { FC } from 'react';
import { Component } from './Button.styles'

interface ButtonProps {
  text: string;
  style?: string;
}

const Button: FC<ButtonProps> = ({ text, style }) => {
  return(
    <Component type="button" className={style}>
      {text}
    </Component>
  )
};

export default Button;