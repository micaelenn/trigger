import { FC } from 'react';
import { Component } from './Button.styles'

interface ButtonProps {
  text: string;
  style: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, style,  onClick }) => {
  return(
    <Component onClick={onClick} type="button" className={style}>
      {text}
    </Component>
  )
};

export default Button;