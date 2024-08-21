// external modules
import { FC, useState } from 'react';

// internal modules
import { Component } from "./Form.styles"
import Input from '@/components/Input/Input';
import Button from "@/components/Button/Button"
import { webhooks } from '@/utils/webhooks';

interface FormProps {}

const Form: FC<FormProps> = () => {
  const [name, setName] = useState('')
  const [webhook, setWebhook] = useState('')
  
  const addWebhook = async () => {
    const newWebhook = { name: name, url: webhook, hashID: '' }
    await webhooks.create(newWebhook)
  }

  return(
    <Component>
      <h2>{`🪝 Add WebHook`}</h2>
      
      <form>
        <Input 
          label={`Name`} 
          placeholder={``}
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
        
        <Input 
          label={`WebHook`} 
          placeholder={``}
          value={webhook}
          onChange={(e) => {setWebhook(e.target.value)}}
        />
        
        <Button 
          text={`Add`} 
          style={`filled blue`}
          onClick={addWebhook}
        />
      </form>
    </Component>
  )
}

export default Form