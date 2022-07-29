
import CompGoogle from './compGoogle';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';

import { Wrapper, Status } from "@googlemaps/react-wrapper";

import React, { useState } from 'react';

function CompProyecto(props) {
    let dataProyecto = props.dataProyecto;
    let dataFlujo = props.dataFlujo;

    const [dataFlujoFiltrado, setDataFlujoFiltrado] = useState(dataFlujo);
    const [dataProyectoFiltrado, setDataProyectoFiltrado] = useState(dataProyecto);

    function apla(event) {
        event.preventDefault();
        const num = parseInt(event.target[0].value);

        setDataFlujoFiltrado(dataFlujo.filter((d) => {
            if (num == d.fkProyecto) {
                return d;
            }
        }));

        setDataProyectoFiltrado(
            dataProyecto.filter(
                (d) => {
                    if (d.id == num)
                        return d;
                }
            )
        );
    }
    //console.log(dataProyectoFiltrado[0]);
    const hola = dataFlujoFiltrado.map(
        (d) => (
            <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.fkProyecto}</td>
                <td>{d.descripcion}</td>
                <td>{d.coordenadas}</td>
            </tr>)
    );

    const render = (status: Status) => {
        return <h1>{status}</h1>;
      };


    return <Container className="p-3 m-3 bg-light"><Row>
        <Col>
            <Form onSubmit={apla}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ingrese id del proyecto:</Form.Label>
                    <Form.Control type="number" placeholder="Solo numeros" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ver detalles del proyecto
                </Button>
            </Form>
        </Col>
        <Col>
            <ListGroup variant="flush">
                <ListGroup.Item>Cliente: {dataProyectoFiltrado[0].cliente}</ListGroup.Item>
                <ListGroup.Item>JP: {dataProyectoFiltrado[0].JP}</ListGroup.Item>
            </ListGroup>
        </Col>
        <Col>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>fk</th>
                        <th>descripcion</th>
                        <th>coordenadas</th>
                    </tr>
                </thead>
                <tbody>
                    {hola}
                </tbody>
            </Table>
        </Col>
        <Col>
            <Wrapper apiKey={"AIzaSyAGgSj0uh5_yPn4ZcLpxaK5H-llGvmvxEI"} render={render}>
                <CompGoogle />
            </Wrapper>
        </Col>
    </Row></Container>;

}

export default CompProyecto;