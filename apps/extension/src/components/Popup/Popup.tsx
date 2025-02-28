import { FC, useState } from 'react';
import { Component } from "./Popup.styles"

// components
import Heading from "@/components/Heading/Heading"
import WebHookList from '@/components/WebHookList/WebHookList';
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"

interface PopUpProps {}

const PopUp: FC<PopUpProps> = () => {
  const [showIntro, setShowIntro] = useState(true)

  const toggleWebhookForm = () => {
    setShowIntro(!showIntro)
  }

  return (
    <Component>
      <Heading title={`Webhook Trigger`} />
      {showIntro ? <WebHookList action={toggleWebhookForm} /> : <Form />}

      <Footer action={toggleWebhookForm} isIntro={showIntro}/>
    </Component>
  )
}

export default PopUp