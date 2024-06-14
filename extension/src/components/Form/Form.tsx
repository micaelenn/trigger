import { FC } from 'react';
import { Component } from "./Form.styles"
import Input from '@/components/Input/Input';
import Button from "@/components/Button/Button"

interface FormProps {}

const Form: FC<FormProps> = () => {
  return(
    <Component>
       <Input label={`Name`} placeholder={`Enter webhook name`}/>
       <Input label={`WebHook`} placeholder={`Enter webhook`}/>
       <Button text={`Edit`} />
    </Component>
  )
}

export default Form