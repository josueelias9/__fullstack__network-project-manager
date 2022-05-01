import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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

    return <Container><Row><Col><h2>Trabajo por sede</h2><Table striped bordered hover>

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
    </Table></Col><Col></Col></Row></Container>
}

export default CompTable;