import styled from 'styled-components'

export const Component = styled.div`
  height: 100%;
  margin-top: 30px;
  
  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: end;

    fieldset,
    button {
      width: 100%;
    }
  }
`