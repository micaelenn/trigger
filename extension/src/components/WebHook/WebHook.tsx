import { FC } from 'react';
import { Component, Actions } from "./WebHook.styles"
import  Button from "@/components/Button/Button"

interface WebhookProps {
  name: string
}

const Webhook: FC<WebhookProps> = ({ name }) => {  
  return (
    <Component>
      <h2>{name}</h2>

      <Actions>
        <Button text={`Edit`} style={`addition`} />
        <Button text={`Start`} style={`action`} />
      </Actions>
    </Component>
  )
}

export default Webhook