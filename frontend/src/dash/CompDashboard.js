import CompResumen from './compResumen'
import CompFlujo from './compFlujo'
import CompProyecto from './compProyecto'
import CompListaProyectos from './compListaProyectos'

import Container from 'react-bootstrap/Container'

function CompDashBoard(props) {

    const dataProyecto = props.dataProyecto;
    const dataTrabajo = props.dataTrabajo;
    const dataFlujo = props.dataFlujo;
    const dataPersona = props.dataPersona;

    return <Container>
        <h2>Vista portafolio</h2>
        <CompListaProyectos dataProyecto={dataProyecto} dataPersona={dataPersona} />
        <h2>Vista proyecto</h2>
        <CompProyecto dataProyecto={dataProyecto} dataFlujo={dataFlujo} />
        <h2>Vista por Flujo</h2>
        <CompFlujo dataFlujo={dataFlujo} dataTrabajo={dataTrabajo} />
        <h2>Backlog</h2>
        <CompResumen dataPersona={dataPersona} dataTrabajo={dataTrabajo} />
    </Container>;
}

export default CompDashBoard