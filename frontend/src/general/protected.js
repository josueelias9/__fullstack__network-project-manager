import CompLogin from '../dash/compLogin'
import CompPagination from '../pagination/compPagination'
import CompTablas from '../tablas/compTablas'
import CompAPI from '../api/api'
import Carousel from 'react-bootstrap/Carousel'
import CompDashBoard from '../dash/CompDashboard'
import Card from 'react-bootstrap/Card'
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Casa2 from '../crud/crud'

import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'



let dataPersona = JSON.parse(localStorage.getItem('dataPersona'));
let dataTrabajo = JSON.parse(localStorage.getItem('dataTrabajo'));
let dataFlujo = JSON.parse(localStorage.getItem('dataFlujo'));
let dataProyecto = JSON.parse(localStorage.getItem('dataProyecto'));


function Protected() {

    return (
        <AuthProvider>
            <h1>Web de seguimiento de proyectos</h1>
            <p>
                La pagina te ofrece dos tipos de vistas: La publica y la privada.
                Para acceder a la vista privade deber contar con un usuario. Solicitarlo
                al siguiente correo con copia a tu lider para ver que tipos de accesos te
                corresponde: josueeliashuaman@gmail.com
            </p>

            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<PublicPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/protected/*"
                        element={
                            <RequireAuth>
                                <ProtectedPage />
                            </RequireAuth>}
                    />
                </Route>
            </Routes>
        </AuthProvider>
    )
}


function Layout() {
    return (
        <div>
            <AuthStatus />

            <Card className="bg-dark text-white">
                <Card.Img src="capa aplicacion.jpg" alt="Card image" width="684" height="270"/>
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <ul>
                <li>
                    <Link to="/">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

let AuthContext = React.createContext(null);

function AuthProvider(props) {
    let [user, setUser] = React.useState(null);
    let signin = (newUser, callBack) => {
        setUser(newUser);
        callBack();
    };
    let signout = (callBack) => {
        setUser(null);
        callBack();
    };

    let value = { user, signin, signout };

    console.log(value);
    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

function useAuth() {
    return React.useContext(AuthContext);
}


function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return <p>You are not logged in.</p>;
    }

    return (
        <p>
            Welcome {auth.user}!{" "}
            <Button
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
                Sign out
            </Button>
        </p>
    );
}

function RequireAuth(props) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <div>{props.children}</div>;
}

function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username");

        auth.signin(username, () => {
            navigate(from, { replace: true });
        });

    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>{" "}
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
}

function PublicPage() {
    return <Carousel variant="dark">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="capa trasporte.png"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="capa acceso.jpg"
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="capa red.jpg"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>;
}

function ProtectedPage() {

    return (
        <Container>
            <Container className="p-3 m-3">
                <Row xs={2} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="capa acceso.jpg" width="160" height="210" />
                            <Card.Body>
                                <Card.Title>Vista API</Card.Title>
                                <Card.Text>
                                    Sincroniza tus datos con el servidor para tener la informacion
                                    mas actualizada.<br></br>
                                    <Link to="/protected/api">acceder</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="capa fisica.jpg" width="160" height="210" />
                            <Card.Body>
                                <Card.Title>Vista dash</Card.Title>
                                <Card.Text>
                                    Para tener un vistazo general de como se relacionanan
                                    las distintas bases de datos. Se requiere tener la base local actualizada.<br></br>
                                    <Link to="/protected/dash">acceder</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="capa aplicacion.jpg" width="160" height="210" />
                            <Card.Body>
                                <Card.Title>Tablas</Card.Title>
                                <Card.Text>
                                    Para revisar todos los proyectos, trabajos, flujos, etc.<br></br>
                                    <Link to="/protected/tablas">acceder</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="capa aplicacion.jpg" width="160" height="210" />
                            <Card.Body>
                                <Card.Title>Paginacion</Card.Title>
                                <Card.Text>
                                    Descarga los reportes que nececesitas.<br></br>
                                    <Link to="/protected/pagination">acceder</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="descanso.jpg" width="160" height="210" />
                            <Card.Body>
                                <Card.Title>CRUD</Card.Title>
                                <Card.Text>
                                    Crea, modifica o elimina proyectos, flujos y trabajos.<br></br>
                                    <Link to="/protected/casa">acceder</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Routes>
                <Route path="/api" element={<CompAPI />} />
                <Route path="/tablas" element={<CompTablas dataProyecto={dataProyecto} dataTrabajo={dataTrabajo} dataFlujo={dataFlujo} dataPersona={dataPersona} />} />
                <Route path="/dash" element={<CompDashBoard dataProyecto={dataProyecto} dataTrabajo={dataTrabajo} dataFlujo={dataFlujo} dataPersona={dataPersona} />} />
                <Route path="/pagination" element={<CompPagination />} />
                <Route path="/casa" element={<Casa2 />} />
            </Routes>

        </Container>

    );

}


export default Protected
