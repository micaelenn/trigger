// external modules
import { FC, useState, useEffect } from 'react';

// internal modules
import { Component } from './WebHookList.style'
import { webhooks } from '@/utils/webhooks';
import { WebhookProps } from '@/types/webhook.props';
import WebHook from "@/components/WebHook/WebHook"

interface WebHookListProps {}

const WebHookList: FC<WebHookListProps> = () => {
  const [webhooksList, setWebhooksList] = useState<WebhookProps[]>([]) 

  const getWebhooks = async () => {
    const currentWebhooks = await webhooks.getAll()
    setWebhooksList(currentWebhooks.data)
  }

  useEffect(() => {
    getWebhooks()
  });

  return(
    <Component>
      {webhooksList.map((webhook, index) => 
        <WebHook 
          key={index}
          name={webhook.name}
          url={webhook.url}
          id={webhook.hashID}
        />
      )}
    </Component>
  )
};

export default WebHookList;