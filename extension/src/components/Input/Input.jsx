import { Component } from "./Input.styles"

export function Input({ label, placeholder}) {
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