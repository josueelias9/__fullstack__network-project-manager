import logo from './logo.svg';
import './App.css';

import CompTable from './components/compTable';
import CompGojs from './components/compGojs';
import CompUpdate from './components/compUpdate';
import CompResumen from './components/compResumen';
import CompProyecto from './components/compProyecto';

import Button from 'react-bootstrap/Button'

import { Routes, Route } from "react-router-dom";

import React, { useState } from 'react';

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
    fk: 1,
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
    fk: 1,
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
    fk: 1,
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
    fk: 2,
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
    fk: 2,
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
    fk: 2,
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

let dataProyecto = [
  {
    cliente: 'Universidad de Lima',
    JP: 'Marco',
    IE: 'Luisandra',
    descripcion: ''
  },
  {
    cliente: 'Rockys',
    JP: 'Marco',
    IE: 'Luisandra',
    descripcion: ''
  },
  {
    cliente: 'Petroperu',
    JP: 'Marco',
    IE: 'Luisandra',
    descripcion: ''
  }
];

function App() {

  const [aux, setAux] = useState(true);
  const [dataAux, setDataAux] = useState(dataTrabajo.filter((d) => { if (d.fk == 1) return d; }));
  function casa() {
    if (aux) {
      setDataAux(dataTrabajo.filter((d) => { if (d.fk == 1) return d; }));
      setAux(!aux);
    }
    else {
      setDataAux(dataTrabajo.filter((d) => { if (d.fk == 2) return d; }));
      setAux(!aux);
    }
  }

  return (
    <div>
      <Button variant="primary" onClick={casa}>Primary</Button>{' '}
      {/*componentes de tabla filtrada */}
      <CompTable data={dataAux} />
      <CompGojs data={dataAux} />
      {/*componentes de tabla */}
      <CompResumen dataTrabajo={dataTrabajo} dataPersona={dataPersona} />
      <CompProyecto />
      <Routes>
        <Route path="update" element={<CompUpdate />} />
        <Route path="" element={<div></div>} />
      </Routes>
    </div>
  );
}


export default App;