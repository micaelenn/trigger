import { Component, Actions } from "./WebHook.styles"
import { Button } from "../Button/Button"

export function WebHook({ name }) {
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