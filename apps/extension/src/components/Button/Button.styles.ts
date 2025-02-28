import styled from 'styled-components'
import { colors } from '@/styles/variables'

export const Component = styled.button`
  background-color: ${colors.white};
  border: none;
  border-radius: 10px;
  color: ${colors.tertiary};
  cursor: pointer;
  padding: 10px 40px;

  &.secondary {
    background-color: transparent;
    border: 1px solid #FFFFFF23;
    color: ${colors.white};
    padding: 5px 20px;
  }
`