
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import { MyChart } from './asda'
import { MyChart2 } from './www'

function CompResumen(props) {

    let datosT = props.dataTrabajo;
    let datosP = props.dataPersona;

    datosP.map((datoP) => {
        datoP.backlog = 0;
    });


    datosT.map((datoT) => {

        if (datoT.estado_requiere == 1 && datoT.estado_activo == 1 && datoT.estado_finalizado == 0) {
            datosP.map((datoP) => {
                if (datoP.id == datoT.fkPersona)
                    datoP.backlog = datoP.backlog + 1;
            });
            // console.log(d.estado_requiere + ' ' +d.estado_activo + ' '+ d.estado_finalizado);
            // console.log(d.responsable);
        }
    });

    const c = datosP.map((datoP) => {
        if (datoP.tipo == 'especialista') {
            return <tr key={datoP.id}>
                <td>{datoP.nombre}</td>
                <td>{datoP.backlog}</td>
                <td>{datoP.cargo}</td>
            </tr>
        }
    });
    return <Container className="p-3 m-3 bg-light"><Row>
        <Col>
        <Row>
            <Table striped bordered hover size="sm" responsive="sm">
                <thead>
                    <tr>
                        <th>Persona</th>
                        <th>Backlog</th>
                        <th>Cargo</th>
                    </tr>
                </thead>
                <tbody>
                    {c}
                </tbody>
            </Table>
            </Row>
            <Row>
                <Col><MyChart2/></Col>
            </Row>
        </Col>
     
        <Col><MyChart/></Col>
    </Row></Container>;
}

export default CompResumen;
