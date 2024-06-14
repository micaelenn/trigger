import { FC } from 'react';
import { Component } from "./Popup.styles"

// components
import Heading from "@/components/Heading/Heading"
import WebHook from "@/components/WebHook/WebHook"
import Form from "@/components/Form/Form"
import Button from "@/components/Button/Button"

interface PopUpProps {}

const PopUp: FC<PopUpProps> = () => {  
  return (
    <Component>
      <Heading title={`Webhook Trigger`} />
      <WebHook name={`Webhook Name`} />
      <Form />
      <Button text={`Add WebHook`} style={`addition`} />
    </Component>
  )
}

export default PopUp