import { Component } from "./Form.styles"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"

export function Form() {
  return(
    <Component>
       <Input label={`Name`} placeholder={`Enter webhook name`}/>
       <Input label={`WebHook`} placeholder={`Enter webhook`}/>
       <Button text={`Edit`} />
    </Component>
  )
}