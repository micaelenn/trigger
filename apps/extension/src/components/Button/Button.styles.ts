import styled from 'styled-components'
import { colors } from '@/styles/variables'

export const Component = styled.button`
  cursor: pointer;

  &.none {
    background-color: transparent;
    border: none;
  }

  &.filled {
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    height: 30px;
    padding: 0 25px;
    text-transform: uppercase;
  }

  &.blue {
    background-color: ${colors.primary};
    color: ${colors.white}
  }

  &.green {
    background-color: ${colors.secondary};
  }

  &.underline {
    border: none;
    background-color: transparent;
    color: ${colors.primary};
    font-size: 14px;
    text-decoration: underline;
  }
`