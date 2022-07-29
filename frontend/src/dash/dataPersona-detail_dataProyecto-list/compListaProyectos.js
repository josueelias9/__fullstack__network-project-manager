import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CompProyectos from './compProyectos';
import CompChart from './compChart';
import Container from 'react-bootstrap/esm/Container';

function CompListaProyectos(props) {
    const dataProyecto = props.dataProyecto;
    const dataPersona = props.dataPersona;
    return <Container className="p-3 m-3 bg-light">
    <Row>
        <Col><CompProyectos dataProyecto={dataProyecto} dataPersona={dataPersona} /></Col>
        <Col><CompChart dataProyecto={dataProyecto} /></Col>
    </Row></Container>;
}

export default CompListaProyectos;