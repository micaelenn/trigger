// external modules
import { FC, useState, useEffect } from 'react';

// internal modules
import { Component, Message } from './WebHookList.style'
import { webhooks } from '@/utils/webhooks'
import { WebhookProps } from '@/types/webhook.props'
import WebHook from "@/components/WebHook/WebHook"
import Button from "@/components/Button/Button"

interface WebHookListProps {
  action: VoidFunction;
}

const WebHookList: FC<WebHookListProps> = ({ action }) => {
  const [webhooksList, setWebhooksList] = useState<WebhookProps[]>([]) 
  const hasWebhooks = webhooksList.length !== 0

  const getWebhooks = async () => {
    const currentWebhooks = await webhooks.getAll()
    setWebhooksList(currentWebhooks.data)
  }

  useEffect(() => {
    getWebhooks()
  });

  return(
    <Component>
      {hasWebhooks ? 
        webhooksList.map((webhook, index) => 
          <WebHook 
            key={index}
            name={webhook.name}
            url={webhook.url}
            id={webhook.hashID}
          />
        ) 
      : 
        <Message>
          <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>
          <Button onClick={action} text={`Add Webhook`} />
        </Message>
      }
    </Component>
  )
};

export default WebHookList;