import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import React, { useEffect, useState } from 'react';

function CompLogin() {

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    useEffect(
        () => {
            async function APIPost() {
                let mensaje = { 
                    usuario: usuario, 
                    contrasena: contrasena 
                }
                let objeto_json = {
                    method: 'post',
                    body: JSON.stringify(mensaje)
                }
                let respuesta = await fetch('http://127.0.0.1:8000/tdp/dataPersona', objeto_json);
                let json = await respuesta.json();
                console.log(json);
            }
            APIPost();
        }
        , [usuario, contrasena]
    );

    function temporal(event) {
        event.preventDefault();
        setUsuario(event.target[0].value);
        setContrasena(event.target[1].value);
    }

    return <Container>
        <Row>
            <Col></Col>
            <Col>
                <Form onSubmit={temporal}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Col>
            <Col></Col>
        </Row>

    </Container>;
}

export default CompLogin;