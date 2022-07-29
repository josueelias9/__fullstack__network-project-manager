import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CompProyectos from './compProyectos';
import CompChart from './compChart';

function CompListaProyectos(props) {
    const dataProyecto = props.dataProyecto;
    const dataPersona = props.dataPersona;
    return <Row>
        <Col><CompProyectos dataProyecto={dataProyecto} dataPersona={dataPersona} /></Col>
        <Col><CompChart dataProyecto={dataProyecto} /></Col>
    </Row>;
}

export default CompListaProyectos;