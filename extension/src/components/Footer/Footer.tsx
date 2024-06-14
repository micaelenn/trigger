import { FC } from 'react';
import { Component } from './Footer.styles';
import Button from "@/components/Button/Button"

interface FooterProps {
  action: () => void;
  isIntro: boolean;
}

const Footer: FC<FooterProps> = ({ action, isIntro }) => {  
  return (
    <Component>
      <Button 
        onClick={action} 
        text={`${isIntro ? 'Add WebHook' : 'Back'}`} 
        style={`underline`} 
      />
    </Component>
  )
}

export default Footer