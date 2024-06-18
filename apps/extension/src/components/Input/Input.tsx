import { FC } from 'react';
import { Component } from "./Input.styles"

interface InputProps {
  label: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({ label, placeholder }) => {
  return(
    <Component>
      <label>{label}</label>
      <input 
        type="text" 
        placeholder={placeholder}
      />
    </Component>
  )
}

export default Input