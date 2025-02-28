import styled from 'styled-components'
import { colors, fonts } from '@/styles/variables'

export const Component = styled.div`
  * {
    box-sizing: border-box;
    font-family: ${fonts.primary};
  }

  p {
    color: ${colors.text};
    line-height: 1.5;
  }

  display: flex;
  flex-direction: column;
  background-color: ${colors.black};
  border-radius: 10px;
  height: 360px;
  padding: 30px 20px;
  width: 340px;
`