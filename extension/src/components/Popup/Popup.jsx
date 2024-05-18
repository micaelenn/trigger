import { Component } from "./Popup.styles"

// components
import { Heading } from "../Heading/Heading"
import { WebHook } from "../WebHook/WebHook"
import { Button } from "../Button/Button"

export function PopUp() {
  return (
    <Component>
      <Heading title={`Webhook Trigger`} />
      <WebHook name={`Kai Panel Vercel`} />
      <Button text={`Add WebHook`} style={`addition`} />
    </Component>
  )
}