import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import TriggerExample from '../general/triggerExample'

function CompTablas(props) {
    let tam = 20
    //const theme = useContext(DataContext);
    const dataProyecto = props.dataProyecto;
    const dataTrabajo = props.dataTrabajo;
    const dataFlujo = props.dataFlujo;
    const dataPersona = props.dataPersona;


    const a = dataProyecto.map((d) => {
        return <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.fkPersona}</td>
            <td><TriggerExample tam={tam} hola={d.cliente} /></td>
            <td><TriggerExample tam={tam} hola={d.JP} /></td>
            <td><TriggerExample tam={tam} hola={d.descripcion} /></td>
            <td>{d.flujosTotal}</td>
            <td>{d.flujosResueltos}</td>
        </tr>

    });
    const b = dataTrabajo.map((d) => {
        return <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.fkFlujo}</td>
            <td>{d.fkPersona}</td>
            <td><TriggerExample tam={tam} hola={d.trabajo} /></td>
            <td><TriggerExample tam={tam} hola={d.responsable} /></td>
            <td>{d.estado_requiere}</td>
            <td>{d.estado_activo}</td>
            <td>{d.estado_finalizado}</td>
            <td><TriggerExample tam={tam} hola={JSON.stringify(d.informacion)} /></td>
            <td><TriggerExample tam={tam} hola={d.sede} /></td>
        </tr>
    });

    const c = dataPersona.map((d) => {
        return <tr key={d.id}>
            <td>{d.id}</td>
            <td><TriggerExample tam={tam} hola={d.nombre} /></td>
            <td><TriggerExample tam={tam} hola={d.cargo} /></td>
            <td><TriggerExample tam={tam} hola={d.tipo} /></td>
        </tr>
    });

    const d = dataFlujo.map((d) => {
        return <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.fkProyecto}</td>
            <td><TriggerExample tam={tam} hola={d.descripcion} /></td>
            <td>{d.coordenadas}</td>
            <td><TriggerExample tam={tam} hola={JSON.stringify(d.flujo)} /></td>
            <td><TriggerExample tam={tam} hola={JSON.stringify(d.conexion)} /></td>
        </tr>
    });

    return <Container clr="red">

        <h3>dataPersona</h3>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nombre</th>
                    <th>cargo</th>
                    <th>tipo</th>
                </tr>
            </thead>
            <tbody>
                {c}
            </tbody>
        </Table>
        <h3>dataProyecto</h3>
        <Table striped bordered hover size="sm" responsive="sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>fkPersona</th>
                    <th>cliente</th>
                    <th>JP</th>
                    <th>descripcion</th>
                    <th>flujosTotal</th>
                    <th>flujosResueltos</th>
                </tr>
            </thead>
            <tbody>
                {a}
            </tbody>
        </Table>
        <h3>dataFlujo</h3>
        <Table striped bordered hover size="sm" responsive="sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>fkProyecto</th>
                    <th>descripcion</th>
                    <th>coordenadas</th>
                    <th>flujo</th>
                    <th>conexion</th>
                </tr>
            </thead>
            <tbody>
                {d}
            </tbody>
        </Table>
        <h3>dataTrabajo</h3>
        <Table striped bordered hover size="sm" responsive="sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>fkFlujo</th>
                    <th>fkPersona</th>
                    <th>trabajo</th>
                    <th>responsable</th>
                    <th>estado_requiere</th>
                    <th>estado_activo</th>
                    <th>estado_finalizado</th>
                    <th>informacion</th>
                    <th>sede</th>
                </tr>
            </thead>
            <tbody>
                {b}
            </tbody>
        </Table>

    </Container>;

}

export default CompTablas;