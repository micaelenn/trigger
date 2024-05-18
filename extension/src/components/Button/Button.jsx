import { Component } from "./Button.styles"

export function Button({ text, style }) {
  return(
    <Component type="button" className={style}>
      {text}
    </Component>
  )
}