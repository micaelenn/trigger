import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const Component = styled.div`
  background-color: ${colors.grey};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  padding: 5px 10px;

  h2 {
    font-size: 16px;
    font-weight: 500;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`