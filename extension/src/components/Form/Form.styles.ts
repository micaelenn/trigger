import styled from 'styled-components'

export const Component = styled.div`
  height: 100%;
  
  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 20px;

    fieldset {
      width: 100%;
    }
  }
`