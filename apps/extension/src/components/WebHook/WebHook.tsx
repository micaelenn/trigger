// external modules
import { FC } from 'react';

// internal modules
import { Component, Actions } from "./WebHook.styles"
import { webhooks } from '@/utils/webhooks';
import  Button from "@/components/Button/Button"

interface WebhookProps {
  name: string,
  url: string,
  id: string;
}

const Webhook: FC<WebhookProps> = ({ name, url, id }) => {  
  const deleteWebhook = async (webhookID: string) => {
    await webhooks.delete(webhookID)
  }

  const triggerWebhook = async (webhookURL: string) => {
    await webhooks.trigger(webhookURL)
  }

  return (
    <Component>
      <h2>{name}</h2>

      <Actions>        
        <Button 
          text={`Start`}
          style={`secondary`}
          onClick={() => triggerWebhook(url)} 
        />
      </Actions>
    </Component>
  )
}

export default Webhook