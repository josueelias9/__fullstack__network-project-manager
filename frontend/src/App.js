import logo from './logo.svg';
import './App.css';

import CompTable from './components/compTable';
import CompGojs from './components/compGojs';
import CompUpdate from './components/compUpdate';
import CompResumen from './components/compResumen';

import Button from 'react-bootstrap/Button'

import { Routes, Route } from "react-router-dom";

import React, { useState } from 'react';


let data1 = [
  {
    trabajo: 'tarea 1',
    responsable: 'Hector',
    estado_requiere: 1,
    estado_activo: 0,
    estado_finalizado: 0,
    id: 1,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'encalada'
  },
  {
    trabajo: 'tarea 2',
    responsable: 'Juan',
    estado_requiere: 1,
    estado_activo: 1,
    estado_finalizado: 0,
    id: 2,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'encalada'
  },
  {
    trabajo: 'tarea 3',
    responsable: 'Marco',
    estado_requiere: 0,
    estado_activo: 0,
    estado_finalizado: 0,
    id: 3,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'encalada'
  }
];

let data2 = [
  {
    trabajo: 'tarea 1',
    responsable: 'Hector',
    estado_requiere: 0,
    estado_activo: 1,
    estado_finalizado: 0,
    id: 1,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'jesus maria'
  },
  {
    trabajo: 'tarea 2',
    responsable: 'Juan',
    estado_requiere: 1,
    estado_activo: 1,
    estado_finalizado: 1,
    id: 2,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'jesus maria'
  },
  {
    trabajo: 'tarea 3',
    responsable: 'Marco',
    estado_requiere: 1,
    estado_activo: 1,
    estado_finalizado: 0,
    id: 3,
    informacion: 'esta tarea consiste en tal y tal cosas',
    sede: 'jesus maria'
  }
];

let data = data2;


function App() {
  const [aux, setAux] = useState(true);

  function bueno() {
    if (aux) data = data1;
    else data = data2;
    setAux(!aux);

  }

  return (
    <div>
      <Button variant="primary" onClick={bueno}>Primary</Button>{' '}
      <CompTable data={data} />
      <CompGojs data={data} />
      <CompResumen />
      <Routes>
        <Route path="update" element={<CompUpdate />} />
        <Route path="" element={<div></div>} />
      </Routes>
    </div>
  );
}


export default App;