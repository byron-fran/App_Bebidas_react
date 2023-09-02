import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import { CategoriaProvider } from "./context/CategoriaContext"
import { BebidasProvider } from "./context/BebidasContext"
import ModalBebida from "./components/ModalBebida"
function App() {


  return (
  <>
    <CategoriaProvider>
    <BebidasProvider>
      <header className="py-5">
          <h1>Buscador de bebidas</h1>
      </header>
      <Container className="mt-5">
          <Formulario/>
          <ModalBebida/>
      </Container>
    </BebidasProvider>
    </CategoriaProvider>
  </>
  )
}

export default App
