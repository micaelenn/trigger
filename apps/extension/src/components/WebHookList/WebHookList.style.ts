import styled from 'styled-components'
import { colors } from '@/styles/variables'

export const Component = styled.div`
  height: 100%;
  overflow: auto;
`

export const Message = styled.div`
  border: 1px solid #FFFFFF23;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
  
  svg {
    color: ${colors.text};
  }
  
  p {
    color: ${colors.text};
    margin: 0 0 20px 0;
  }
`