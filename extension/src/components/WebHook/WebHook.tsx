// external modules
import { FC } from 'react';

// internal modules
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
        <Button text={`Edit`} style={`underline`} />
        <Button text={`Start`} style={`filled green`} />
      </Actions>
    </Component>
  )
}

export default Webhook