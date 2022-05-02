import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import React, { useState } from 'react';

function CompProyectos(props) {

  const datosP = props.dataProyecto;
  const dataPersona = props.dataPersona;
  const [data, setData] = useState(datosP);


  console.log(dataPersona);

  const a = data.map((datoP) => {
    const b = dataPersona.map((d) => {
      if (d.id == datoP.fkPersona) return d.nombre;
    });

    return <tr key={datoP.id}>
      <td>{datoP.id}</td>
      <td>{datoP.cliente}</td>
      <td>{datoP.JP}</td>
      <td>{datoP.descripcion}</td>
      <td>{b}</td>
    </tr>
  });

  function miFiltro(event) {
    setData(
      datosP.filter((datoP) => {
        const stringTotal = datoP.cliente.toLowerCase();
        const stringBuscado = event.target.value.toLowerCase();
        if (stringTotal.includes(stringBuscado)) { return datoP }
      }));
  }

  return <Container>
    <InputGroup size="sm" className="mb-3" onChange={miFiltro}>
      <InputGroup.Text id="inputGroup-sizing-sm">cliente</InputGroup.Text>
      <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
    </InputGroup>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>cliente</th>
          <th>JP</th>
          <th>descripcion</th>
          <th>responsable</th>
        </tr>
      </thead>
      <tbody>
        {a}
      </tbody>
    </Table></Container>;
}

export default CompProyectos;