import { useState } from 'react';
import {Button, Form, Row, Col, Alert} from 'react-bootstrap'
import ListaBebidas from './ListaBebidas';
import useCategoria from '../hooks/useCategoria';
import useBebidas from '../hooks/useBebidas';

const Formulario = () => {
    const {categorias} = useCategoria();
    const { getBebidas} = useBebidas()
    const [alerta, setAlerta] = useState('');
    const [busqueda,setBusqueda] = useState({
        nombre : '',
        categoria : ''
    });

    const handleSubmit =  e => {
     
        e.preventDefault();
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios');
            return
        }
        getBebidas(busqueda)
        setAlerta('')
    }
  return (
   <Form onSubmit={ handleSubmit }>
        <Row>
        {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
            <Col md={6}>
                <Form.Group className='mt-3'>
                    <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
                    <Form.Control 
                        id='nombre'
                        placeholder='nombre de bebida'
                        type='text'
                        name='nombre'
                        value={busqueda.nombre}
                        onChange={e => setBusqueda({...busqueda, nombre : e.target.value})}/>
                </Form.Group>
              
            </Col>
            <Col md={6}>
                <Form.Group className='mt-3'>
                    <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>
                    <Form.Select id='categoria'
                    value={busqueda.categoria}
                    onChange={e => setBusqueda({...busqueda, categoria : e.target.value})}>
                        <option >Selecciona bebida</option>
                        {categorias.map(categoria => (
                            <option key={Math.random().toString(16)} value={categoria.strCategory}>{categoria.strCategory}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className='justify-content-end'>
            <Col md={3} >

                <Button
                variant='danger'
                className='text-uppercase mt-4 w-100'
                type='submit'>
                    Buscar Bebidas
                </Button>
            </Col>
        </Row>
    <ListaBebidas/>
   </Form>
  )
}

export default Formulario