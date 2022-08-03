
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert'

function Detalle(props) {
    let object = props.object
    if (typeof object === "undefined") {
        let variant = 'danger'
        return <Alert key={variant} variant={variant}>
            El props entregado a este componente no esta definido.
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

    const [miObjeto, setMiObjeto] = useState()

    async function get() {
        // endpoint a trabajar
        let PersonaFiltro_endpoint = "http://127.0.0.1:8000/tdp/PersonaFiltro"
        // ver como automatizamos esto
        let id = 8
        // formando enpoint real
        let endpoint = PersonaFiltro_endpoint + "?id=" + id
        // peticion via fetch
        let response = await fetch(endpoint)
        let object = await response.json()
        setMiObjeto(object)
    }

    return <Container>
        <Row><h2>este es el titulo</h2></Row>
        <Row>
            <Col sm={4}>
                <Detalle object={miObjeto} />
                <h2>
                    <Button onClick={get}>boton</Button>
                    <Casa />
                </h2>
            </Col>
            <Col sm={8}>
                <Tabla object={miObjeto} />
            </Col>
        </Row>
        <Row><h2>Segunda parte</h2></Row>
        <Row>
            <Col sm={4}>
                detalle
            </Col>
            <Col sm={8}>
                lista
            </Col>
        </Row>
    </Container>
}


function Tabla(props) {

    let object = props.object

    if (typeof object === "undefined") {
        let variant = 'danger'
        return <Alert key={variant} variant={variant}>
            El props entregado a este componente no esta definido.
        </Alert>

    } else {
        // html de "lista" (plural)
        let html_lista = object.lista.map((proyecto) => {
            let keys_proyecto = Object.keys(proyecto)
            console.log("-------------")
            let f = keys_proyecto.map((key_proyecto) => {
                // tener en cuenta que si si proyecto[key_proyecto] es un array[] o un objeto{} 
                // tenemos que aplicar stringify para no tener problemas. Al aplicar typeof
                // javascript detecta la lista[] y objecto{} como tipo "object"
                if (typeof proyecto[key_proyecto] === 'object') {
                    return <td key={key_proyecto}>{JSON.stringify(proyecto[key_proyecto])}</td>
                } else {
                    return <td key={key_proyecto}>{proyecto[key_proyecto]}</td>
                }
            })
            return <tr key={proyecto.id}>
                {f}
                <td><Button>detail</Button></td>
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
        console.log("sali")
        get()

    };
    const handleShow = () => {
        setShow(true)
        console.log("entre")
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