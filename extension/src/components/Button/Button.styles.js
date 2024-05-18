import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const Component = styled.button`
  &.action {
    background-color: ${colors.secondary};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    height: 30px;
    padding: 0 25px;
    text-transform: uppercase;
  }

  &.addition {
    border: none;
    background-color: transparent;
    color: ${colors.primary};
    font-size: 14px;
    text-decoration: underline;
  }
`