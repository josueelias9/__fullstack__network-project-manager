import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CompGojs from './compGojs';

import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function CompFlujo(props) {

    const dataTrabajo = props.dataTrabajo;
    const dataFlujo = props.dataFlujo;

    const [dataTrabajoFiltrado, setDataTrabajoFiltrado] = useState(dataTrabajo.filter((d) => { if (d.fkFlujo == 1) return d; }));
    const [dataFlujoFiltrado, setDataFlujoFiltrado] = useState(dataFlujo.filter((d) => { if (d.id == 1) return d; }));



    function apla(event) {
        event.preventDefault();
        const num = parseInt(event.target[0].value);
        if (isNaN(num) || num <= 0) {

        }
        else {
            setDataTrabajoFiltrado(dataTrabajo.filter((d) => { if (d.fkFlujo == num) return d; }));
            setDataFlujoFiltrado(dataFlujo.filter((d) => { if (d.id == num) return d; }));
        }
    }


    return <Row>
        <Col>
            <Form onSubmit={apla}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>id del flujo:</Form.Label>
                    <Form.Control type="number" placeholder="Solo numeros" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <style type="text/css">
                    {`
                        .btn-primary {
                          background-color: black;
                          color: white;
                        }
                    
                        .btn-xxl {
                          padding: 1rem 1.5rem;
                          font-size: 1.5rem;
                        }
                    `}
                </style>
                <Button variant="primary" type="submit">
                    Ver flujo
                </Button>
            </Form>
        </Col>
        <Col><CompTable data={dataTrabajoFiltrado} /></Col>
        <Col><CompGojs dataTrabajoFiltrado={dataTrabajoFiltrado} dataFlujo={dataFlujoFiltrado} /></Col>
    </Row>;
}




function CompTable(props) {

    const trabajos = props.data;
    const hola = trabajos.map(
        (trabajo) => (<tr key={trabajo.id}>
            <td>{trabajo.sede}</td>
            <td>{trabajo.trabajo}</td>
            <td>{trabajo.responsable}</td>
            <td>{trabajo.estado_requiere}</td>
            <td>{trabajo.estado_activo}</td>
            <td>{trabajo.estado_finalizado}</td>
            <td>{trabajo.informacion}</td>
        </tr>)
    );

    return <Container><Table striped bordered hover>

        <thead>
            <tr>
                <th>sede</th>
                <th>trabajo</th>
                <th>responsable</th>
                <th>requiere</th>
                <th>activo</th>
                <th>finalizado</th>
                <th>informacion</th>
            </tr>
        </thead>

        <tbody>
            {hola}
        </tbody>
    </Table></Container>
}


export default CompFlujo;