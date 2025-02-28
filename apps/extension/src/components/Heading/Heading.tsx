import { FC } from 'react';
import { Component } from "./Heading.styles"

interface HeadingProps {
  title: string
}

const Heading: FC<HeadingProps> = ({ title }) => {  
  return (
    <Component>
      <h1>{title}</h1>
    </Component>
  )
}

export default Heading