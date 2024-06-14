import { FC } from 'react';
import { Component } from './WebHookList.style'
import WebHook from "@/components/WebHook/WebHook"

interface WebHookListProps {}

const WebHookList: FC<WebHookListProps> = () => {
  return(
    <Component>
      <WebHook name={`Webhook Name`} />
      <WebHook name={`Webhook Name`} />
    </Component>
  )
};

export default WebHookList;