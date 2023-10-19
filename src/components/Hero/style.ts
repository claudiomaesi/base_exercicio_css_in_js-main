import styled from 'styled-components'

export const Vagas = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.7;

    @media (max-width: 768px) {
      height: auto;
      padding: 24px 0;
    }
  }
`
export const HeroDiv = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: auto auto;
  display: block;
`

export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  color: ${(props) => props.theme.corSecundaria};
  display: block;
  position: relative;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
