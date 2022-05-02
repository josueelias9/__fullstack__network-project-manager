import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import CompTable from './compTable';
import CompGojs from './compGojs';

import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CompFlujo(props) {

    const dataTrabajo = props.dataTrabajo;
    const dataFlujo = props.dataFlujo;

    const [dataTrabajoFiltrado, setDataAux] = useState(dataTrabajo.filter((d) => { if (d.fkFlujo == 1) return d; }));

    function apla(event){
        event.preventDefault();
        const num = parseInt(event.target[0].value);
        setDataAux(dataTrabajo.filter((d) => { if (d.fkFlujo == num) return d; }));
    }

    return <Row>
        <h2>Vista por Flujo</h2>
        <Col><CompTable data={dataTrabajoFiltrado} /></Col>
        <Col><CompGojs dataTrabajoFiltrado={dataTrabajoFiltrado} dataFlujo={dataFlujo} /></Col>
        <Col>
            <Form onSubmit={apla}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>id del flujo:</Form.Label>
                    <Form.Control type="number" placeholder="Solo numeros" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ver flujo
                </Button>
            </Form>
        </Col>
    </Row>;
}

export default CompFlujo;