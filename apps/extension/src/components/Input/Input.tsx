import { FC } from 'react';
import { Component } from "./Input.styles"

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ label, placeholder, value, onChange }) => {
  return(
    <Component>
      <label>{label}</label>
      <input 
        type="text" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Component>
  )
}

export default Input