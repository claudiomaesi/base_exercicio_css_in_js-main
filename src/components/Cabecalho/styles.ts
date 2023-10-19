import styled from 'styled-components'

export const Titulo = styled.header`
  display: block;
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`
