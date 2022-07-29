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
        {/* trabaja principalmente con dataProyecto en forma "lista" (todos los elementos) */}
        <Container className="p-3 m-3 bg-secondary text-white"><h3>dataProyecto - list</h3></Container>
        <CompListaProyectos dataProyecto={dataProyecto} dataPersona={dataPersona} />
        
        {/* trabaja principalmente con dataProyecto en forma "detail" (un elemento) */}
        <Container className="p-3 m-3 bg-secondary text-white"><h3>dataProyecto - detail / dataFlujo - list</h3></Container>
        <CompProyecto dataProyecto={dataProyecto} dataFlujo={dataFlujo} />
        
        {/* trabaja principalmente con dataFlujo en forma "detail" (un elemento) */}
        <Container className="p-3 m-3 bg-secondary text-white"><h3>dataFlujo - detail / dataTrabajo - list</h3></Container>
        <CompFlujo dataFlujo={dataFlujo} dataTrabajo={dataTrabajo} />
        
        {/* trabaja principalmente con dataPersona en forma "lista" (todos los elementos) */}
        <Container className="p-3 m-3 bg-secondary text-white"><h3>dataPersona - lista</h3></Container>
        <CompResumen dataPersona={dataPersona} dataTrabajo={dataTrabajo} />
    </Container>;
}

export default CompDashBoard