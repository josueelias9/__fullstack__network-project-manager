
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'


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

    console.log(datosP);

    const c = datosP.map((datoP) => (<tr key={datoP.id}><td>{datoP.nombre}</td><td>{datoP.backlog}</td></tr>));
    return <Container><h2>Backlog</h2><Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>Persona</th>
                <th>Backlog</th>
            </tr>
        </thead>
        <tbody>
            {c}
        </tbody>
    </Table></Container>;
}

export default CompResumen;