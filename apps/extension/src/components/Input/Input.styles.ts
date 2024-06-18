import styled from 'styled-components'
import { colors } from '@/styles/variables'

export const Component = styled.fieldset`
  border: none;
  margin-bottom: 20px;
  padding: 0;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    border: 1px solid ${colors.black};
    border-radius: 5px;
    font-size: 14px;
    height: 40px;
    padding: 10px;
    width: 100%;
  }
`