import styled from 'styled-components'
import { colors } from '@/styles/variables'

export const Component = styled.fieldset`
  border: none;
  margin-bottom: 20px;
  padding: 0;

  label {
    color: ${colors.title};
    display: block;
    margin-bottom: 5px;
  }

  input {
    background-color: transparent;
    border: 1px solid #FFFFFF23;
    border-radius: 5px;
    color: ${colors.title};
    font-size: 14px;
    height: 40px;
    padding: 10px;
    width: 100%;
  }
`