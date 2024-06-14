import { FC } from 'react';
import { Component } from "./Form.styles"
import Input from '@/components/Input/Input';
import Button from "@/components/Button/Button"

interface FormProps {}

const Form: FC<FormProps> = () => {
  return(
    <Component>
      <h2>{`Add Webhook`}</h2>
      
      <form>
        <Input label={`Name`} placeholder={``}/>
        <Input label={`WebHook`} placeholder={``}/>
        <Button text={`Add`} style={`filled blue`}/>
      </form>
    </Component>
  )
}

export default Form