import styled from 'styled-components'
import { colors } from '@/styles/variables'

export const Component = styled.div`
  background-color: transparent;
  border: 1px solid #FFFFFF23;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  padding: 5px 10px;

  h2 {
    color: ${colors.text};
    font-size: 14px;
    font-weight: 400;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`