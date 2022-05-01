import logo from './logo.svg';
import './App.css';

import CompTable from './components/compTable';
import CompGojs from './components/compGojs';
import CompUpdate from './components/compUpdate';
import CompResumen from './components/compResumen';
import CompProyecto from './components/compProyecto';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import { Routes, Route } from "react-router-dom";

import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';

let dataPersona = [
  {
    nombre: 'Hector',
    id: 1
  },
  {
    nombre: 'Juan',
    id: 2
  },
  {
    nombre: 'Marco',
    id: 3
  }
]


let dataTrabajo = [
  {
    id: 1,
    fkProyecto: 1,
    fkPersona: 1,
    trabajo: 'tarea 1',
    responsable: 'Hector',
    estado_requiere: 1,
    estado_activo: 0,
    estado_finalizado: 0,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'encalada'
  },
  {
    id: 2,
    fkProyecto: 1,
    fkPersona: 2,
    trabajo: 'tarea 2',
    responsable: 'Juan',
    estado_requiere: 1,
    estado_activo: 1,
    estado_finalizado: 0,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'encalada'
  },
  {
    id: 3,
    fkProyecto: 1,
    fkPersona: 3,
    trabajo: 'tarea 3',
    responsable: 'Marco',
    estado_requiere: 0,
    estado_activo: 0,
    estado_finalizado: 0,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'encalada'
  },
  {
    id: 4,
    fkProyecto: 2,
    fkPersona: 1,
    trabajo: 'tarea 1',
    responsable: 'Hector',
    estado_requiere: 0,
    estado_activo: 1,
    estado_finalizado: 0,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'jesus maria'
  },
  {
    id: 5,
    fkProyecto: 2,
    fkPersona: 2,
    trabajo: 'tarea 2',
    responsable: 'Juan',
    estado_requiere: 1,
    estado_activo: 1,
    estado_finalizado: 1,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'jesus maria'
  },
  {
    id: 6,
    fkProyecto: 2,
    fkPersona: 3,
    trabajo: 'tarea 3',
    responsable: 'Marco',
    estado_requiere: 1,
    estado_activo: 1,
    estado_finalizado: 0,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'jesus maria'
  }
];

let flujo = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
];

let dataProyecto = [
  {
    id: 1,
    cliente: 'Universidad de Lima',
    JP: 'Marco',
    IE: 'Luisandra',
    descripcion: ''
  },
  {
    id: 2,
    cliente: 'Rockys',
    JP: 'Marco',
    IE: 'Luisandra',
    descripcion: ''
  },
  {
    id: 3,
    cliente: 'Petroperu',
    JP: 'Marco',
    IE: 'Luisandra',
    descripcion: ''
  }
];

function App() {

  const [aux, setAux] = useState(true);
  const [dataAux, setDataAux] = useState(dataTrabajo.filter((d) => { if (d.fkProyecto == 1) return d; }));
  function casa() {
    if (aux) {
      setDataAux(dataTrabajo.filter((d) => { if (d.fkProyecto == 1) return d; }));
      setAux(!aux);
    }
    else {
      setDataAux(dataTrabajo.filter((d) => { if (d.fkProyecto == 2) return d; }));
      setAux(!aux);
    }
  }

  return (
    <div>

      <Container>

        <Row>
          <Col><CompTable data={dataAux} /></Col>
          <Col><CompResumen dataTrabajo={dataTrabajo} dataPersona={dataPersona} /></Col>
        </Row>
        <Row>
          <Col><CompGojs data={dataAux} /></Col>
          <Col><CompProyecto dataProyecto={dataProyecto} /></Col>
        </Row>
      </Container>
      <Button variant="primary" onClick={casa}>Primary</Button>{' '}
      {/*componentes de tabla filtrada */}
      {/*componentes de tabla */}
      <Routes>
        <Route path="update" element={<CompUpdate />} />
        <Route path="" element={<div></div>} />
      </Routes>
    </div>
  );
}


export default App;