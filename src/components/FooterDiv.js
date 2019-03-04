import styled from 'styled-components'
import { themedConfig } from '../config'

const FooterDiv = styled.div`
  color: ${props => themedConfig(props.theme).textColor};
  background-color: ${props => themedConfig(props.theme).primaryColor};
  width: 100%;
  text-align: center;
  font-size: 0.8em;
  line-height: 1.0em;
`

export default FooterDiv
