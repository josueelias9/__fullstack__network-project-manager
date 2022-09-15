
import React, { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert'
import TriggerExample from '../general/triggerExample';

const ThemeContext = React.createContext();


function Detalle(props) {

    const [macro, setMacro]=useContext(ThemeContext)

    console.log("dentro de main")
    console.log(macro)
    console.log("fuera de main")


    let object = props.object
    if (typeof object === "undefined" || object.detalle.length==0) {
        let variant = 'danger'
        return <Alert key={variant} variant={variant}>
            Posibles problemas:
            <li>El props entregado a este componente no esta definido.</li>
            <li>El atributo "detalle" esta vacio</li>
        </Alert>
    } else {
        // html de "detalle" (singular)
        let keys = Object.keys(object.detalle[0])
        let html_detalle = keys.map((key) => {
            return <ListGroup.Item key={key}><strong>{key}</strong>: {object.detalle[0][key]}</ListGroup.Item>
        })
        return <ListGroup variant="flush">
            {html_detalle}
        </ListGroup>
    }
}

function Casa2() {

    const [persona, setPersona] = useState()
    const [proyecto, setProyecto] = useState()
    
    
    const [macro, setMacro] = useState("defaulT!!")

    async function get() {
        // endpoint a trabajar
        let PersonaFiltro_endpoint = "http://127.0.0.1:8000/tdp/PersonaFiltro?id=8"
        let ProyectoFiltro_endpoint = "http://127.0.0.1:8000/tdp/ProyectoFiltro?id=1"
        let TrabajoFiltro_endpoint = "http://127.0.0.1:8000/tdp/TrabajoFiltro?id=1"
        // ver como automatizamos esto
        // peticion via fetch
        let persona_response = await fetch(PersonaFiltro_endpoint)
        let persona_object = await persona_response.json()
        setPersona(persona_object)

        let proyecto_response = await fetch(ProyectoFiltro_endpoint)
        let proyecto_object = await proyecto_response.json()
        setProyecto(proyecto_object)
    }

    return <ThemeContext.Provider value={[macro, setMacro]}>
    <Container>
        <Row><h2>este es el titulo</h2></Row>
        <Row>
            <Col sm={4}>
                <Detalle object={persona} />
                <h2>
                    <Button onClick={get}>boton</Button>
                    <Casa />
                </h2>
            </Col>
            <Col sm={8}>
                <Tabla object={persona} />
            </Col>
        </Row>
        <Row><h2>Segunda parte</h2></Row>
        <Row>
            <Col sm={4}>
            <Detalle object={proyecto} />
                <h2>
                    <Button onClick={get}>boton</Button>
                    <Casa />
                </h2>
            </Col>
            <Col sm={8}>
            <Tabla object={proyecto} />
            </Col>
        </Row>
    </Container>
    </ThemeContext.Provider>
}


function Tabla(props) {
    const [macro, setMacro] = useContext(ThemeContext);
    setMacro("oeoeoe")
    console.log(macro)

    let object = props.object

    function borrame(event,asd){
        console.log(asd)
    }

    if (typeof object === "undefined" || object.lista.length==0 ) {
        let variant = 'danger'
        return <Alert key={variant} variant={variant}>
            Posibles problemas:
            <li>El props entregado a este componente no esta definido.</li>
            <li>El atributo "lista" esta vacio</li>
        </Alert>

    } else {
        // html de "lista" (plural)
        let html_lista = object.lista.map((proyecto) => {
            let keys_proyecto = Object.keys(proyecto)
            let f = keys_proyecto.map((key_proyecto) => {
                // tener en cuenta que si si proyecto[key_proyecto] es un array[] o un objeto{} 
                // tenemos que aplicar stringify para no tener problemas. Al aplicar typeof
                // javascript detecta la lista[] y objecto{} como tipo "object"
                if (typeof proyecto[key_proyecto] === 'object') {
                    return <td key={key_proyecto}>{<TriggerExample tam={20} hola={JSON.stringify(proyecto[key_proyecto])}/>}</td>
                } else {
                    return <td key={key_proyecto}>{<TriggerExample tam={20} hola={proyecto[key_proyecto]}/>}</td>
                }
            })
            return <tr key={proyecto.id}>
                {f}
                <td><Button onClick={(event)=>{borrame(event,proyecto.id)}}>detail</Button></td>
            </tr>
        })
        // ahora vamos por los titulos
        let html_titulos = Object.keys(object.lista[0])
        let html_proyecto_header = html_titulos.map((titulo) => {
            return <th key={titulo}>{titulo}</th>
        })

        return <Table striped bordered hover>
            <thead>
                <tr>
                    {html_proyecto_header}
                    <th>detalle</th>
                </tr>
            </thead>
            <tbody>
                {html_lista}
            </tbody>
        </Table>
    }

}

function Casa() {
    let main_endpoint = "http://127.0.0.1:8000/tdp/PersonaCRUD"
    // C
    // R
    async function get() {
        let id = 1
        let endpoint = main_endpoint + "?id=" + id
        let response = await fetch(endpoint)
        let object = await response.json()
    }
    // U
    async function put() {

        let xxx = {
            method: 'put',
            body: JSON.stringify({ id: 1 })
        }
        try {
            let endpoint = main_endpoint
            let response = await fetch(endpoint, xxx)
            let object = await response.json()

        } catch (error) {
            console.log(error)
        }
    }
    //D

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        get()

    };
    const handleShow = () => {
        setShow(true)
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Casa2