import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';


function CompNav(){

    return <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="telefonica.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        Proyectos
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>;
}

export default CompNav;