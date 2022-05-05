import CompResumen from './compResumen';
import CompFlujo from './compFlujo';
import CompProyecto from './compProyecto';
import CompListaProyectos from './compListaProyectos';

import Container from 'react-bootstrap/esm/Container';

function CompDashBoard(props) {

    const dataProyecto = props.dataProyecto;
    const dataTrabajo = props.dataTrabajo;
    const dataFlujo = props.dataFlujo;
    const dataPersona = props.dataPersona;

    return <Container>
        <h2>Lista de proyectos</h2>
        <CompListaProyectos dataProyecto={dataProyecto} dataPersona={dataPersona} />
        <h2>Vista proyecto</h2>
        <CompProyecto dataProyecto={dataProyecto} dataFlujo={dataFlujo} />
        <h2>Vista por Flujo</h2>
        <CompFlujo dataTrabajo={dataTrabajo} dataFlujo={dataFlujo} />
        <h2>Backlog</h2>
        <CompResumen dataTrabajo={dataTrabajo} dataPersona={dataPersona} />
    </Container>
        ;
}

export default CompDashBoard;