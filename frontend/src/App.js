import logo from './logo.svg';
import './App.css';

import React from 'react';

import CompTable from './components/compTable';
import CompGojs from './components/compGojs';

import Button from 'react-bootstrap/Button'


import { Routes, Route } from "react-router-dom";
import CompUpdate from './components/compUpdate';


function App() {

  return (
    <div>
      <Button variant="primary">Primary</Button>{' '}
      <CompTable />
      <CompGojs />
      <Routes>
        <Route path="update" element={<CompUpdate />} />
      </Routes>
    </div>
  );
}


export default App;




