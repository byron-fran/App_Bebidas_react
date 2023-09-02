import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"
const ModalBebida = () => {
  const{modal, handleModalChange, receta,cargando} = useBebidas();
  const mostrarIngredientes = () => {
    let ingredientes = [];

    for(let i = 1 ; i<16 ; i ++){
      if(receta[`strIngredient${i}`]){
        ingredientes.push(<li key={Math.random().toString(16)}>{receta[`strIngredient${i}`]}{receta[`strMeasure${i}`]}</li>)
      }
    }
    return ingredientes
  }
  return (
    <>
      {!cargando &&  (
      <Modal show={modal} onHide={ handleModalChange}>
          <Image
              src={receta.strDrinkThumb}
              alt={receta.strDrink}
            />
          <Modal.Header>
              <Modal.Title>{receta.strDrink}</Modal.Title>
    
          </Modal.Header>
          <Modal.Body>
            <div className="p-3">
                <h2>Instrucciones</h2>
                {receta.strInstructions}
                <h2>Ingredintes y cantidad</h2>
                {mostrarIngredientes()}
            </div>
          </Modal.Body>
      </Modal>
      )}

    </>
  )
}

export default ModalBebida