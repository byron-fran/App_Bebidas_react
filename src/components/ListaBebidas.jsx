
import { Row } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import Bebidas from './Bebidas'
const ListaBebidas = () => {
    const {bebidas} = useBebidas();
  
  return (
    <Row>
        {bebidas.map(bebida => {
          return ( <Bebidas key={bebida.idDrink} bebida={bebida}/>)
        })}
    </Row>
  )
}

export default ListaBebidas