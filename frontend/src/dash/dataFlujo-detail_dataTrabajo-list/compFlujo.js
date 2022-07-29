import CompGojs from './compGojs';

import React, { useState } from 'react';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import TriggerExample from '../../general/triggerExample'

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


    return <Container className="p-3 m-3 bg-light"><Row>
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
        <Col><CompTable data={dataTrabajoFiltrado} /></Col>
        <Col><CompGojs dataTrabajoFiltrado={dataTrabajoFiltrado} dataFlujo={dataFlujoFiltrado} /></Col>
    </Row></Container>;
}




function CompTable(props) {

    const trabajos = props.data;
    const hola = trabajos.map(
        (trabajo) => {
            let texto = ""
            let lista_key = Object.keys(trabajo.informacion)
            for(let i = 0; i<lista_key.length; i ++ ){
                texto = texto + lista_key[i] + ": "+trabajo.informacion[lista_key[i]]+" / "
            }
            console.log(trabajo.informacion)
            return <tr key={trabajo.id}>
                <td><TriggerExample hola={trabajo.sede} tam={7}/></td>
                <td><TriggerExample hola={trabajo.trabajo} tam={7}/></td>
                <td><TriggerExample hola={trabajo.responsable} tam={7}/></td>
                <td>{trabajo.estado_requiere}</td>
                <td>{trabajo.estado_activo}</td>
                <td>{trabajo.estado_finalizado}</td>
                <td><TriggerExample hola={texto} tam={7}/></td>
                </tr>
        }
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