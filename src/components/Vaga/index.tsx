//import styles from './Vaga.module.css'
import { LiVaga, LiVagaTitulo, LiVagaLink } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <LiVaga>
    <LiVagaTitulo>{props.titulo}</LiVagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <LiVagaLink href="#">Ver detalhes e candidatar-se</LiVagaLink>
  </LiVaga>
)

export default Vaga
