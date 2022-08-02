import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/telefonica.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Telefonica - Ing. Josue Huaman
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;