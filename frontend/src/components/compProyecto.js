
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table';


function CompProyecto(props){

    const datosP = props.dataProyecto;
    
    const a =  datosP.map((datoP)=>(

        <tr key={datoP.id}>
            <td>{datoP.cliente}</td>
            <td>{datoP.JP}</td>
            <td>{datoP.IE}</td>
        </tr>
    
    )
    
    );
   return <Container><h2>Lista de proyectos</h2><Table striped bordered hover size="sm">
   <thead>
     <tr>
       <th>cliente</th>
       <th>JP</th>
       <th>IE</th>
     </tr>
   </thead>
   <tbody>
       {a}
   </tbody>
 </Table></Container>;

}

export default CompProyecto;