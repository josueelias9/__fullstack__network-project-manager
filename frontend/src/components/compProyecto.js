
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


import React, { useState } from 'react';



function CompProyecto(props) {

  const datosP = props.dataProyecto;
  const [data, setData] = useState(datosP);


  const a = data.map((datoP) => (
    <tr key={datoP.id}>
      <td>{datoP.cliente}</td>
      <td>{datoP.JP}</td>
      <td>{datoP.IE}</td>
      <td>{datoP.descripcion}</td>
    </tr>
  ));

  function miFiltro(event) {
    setData(datosP.filter((datoP) => {
      const stringTotal = datoP.IE.toLowerCase();
      const stringBuscado = event.target.value.toLowerCase();
      if (stringTotal.includes(stringBuscado)) { return datoP }
    }));
  }

  console.log(datosP);
  return <Container><h2>Lista de proyectos</h2>
    <InputGroup size="sm" className="mb-3" onChange={miFiltro}>
      <InputGroup.Text id="inputGroup-sizing-sm">IE</InputGroup.Text>
      <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
    </InputGroup>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>cliente</th>
          <th>JP</th>
          <th>IE</th>
          <th>descripcion</th>
        </tr>
      </thead>
      <tbody>
        {a}
      </tbody>
    </Table></Container>;

}

export default CompProyecto;