import Table from 'react-bootstrap/Table';

function CompTable(props) {

    const trabajos = JSON.parse(localStorage.getItem('storage1'));

    const hola = trabajos.map(
        (trabajo) => (<tr key={trabajo.id}>
            <td>{trabajo.trabajo}</td>
            <td>{trabajo.responsable}</td>
            <td>{trabajo.estado_requiere}</td>
            <td>{trabajo.estado_activo}</td>
            <td>{trabajo.estado_finalizado}</td>
            <td>{trabajo.informacion}</td>

        </tr>)
    );

    return <div><Table striped bordered hover>

        <thead>
            <tr>
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
    </Table></div>
}

export default CompTable;