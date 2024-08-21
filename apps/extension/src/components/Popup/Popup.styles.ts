import styled from 'styled-components'
import { colors } from '@/styles/variables'

export const Component = styled.div`
  * {
    box-sizing: border-box
  }

  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 10px;
  height: 310px;
  padding: 20px 15px;
  min-height: 310px;
  width: 370px;
`