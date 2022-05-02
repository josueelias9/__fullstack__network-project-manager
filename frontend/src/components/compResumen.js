
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'


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
    return <Row>
        <Col>
            <Table striped bordered hover variant="dark">
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
        </Col>
        <Col>
            ¿Como es que se calcula en backlog?
            <Card.Img variant="top" src="backlog.png" />
        </Col>
    </Row>;
}

export default CompResumen;