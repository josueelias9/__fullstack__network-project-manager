import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


function CompTable(props) {
    
    const trabajos = props.data;
    const hola = trabajos.map(
        (trabajo) => (<tr key={trabajo.id}>
            <td>{trabajo.sede}</td>
            <td>{trabajo.trabajo}</td>
            <td>{trabajo.responsable}</td>
            <td>{trabajo.estado_requiere}</td>
            <td>{trabajo.estado_activo}</td>
            <td>{trabajo.estado_finalizado}</td>
            <td>{trabajo.informacion}</td>
        </tr>)
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

export default CompTable;