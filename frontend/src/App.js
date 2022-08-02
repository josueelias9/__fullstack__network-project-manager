import logo from './logo.svg';
import './App.css';
import CompNav from './general/compNav';
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Protected from './general/protected';
import BrandExample from './general/navdos';


function App() {
  return (
    <>
      <Container bg="success">
        <CompNav />
        <Protected />
        <BrandExample />
      </Container>
    </>);
}


export default App;