import logo from './logo.svg';
import './App.css';

import CompNav from './general/compNav';
import CompLogin from './dash/compLogin';
import CompPagination from './pagination/compPagination';
import CompTablas from './tablas/compTablas';

import CompAPI from './api/api';

import Carousel from 'react-bootstrap/Carousel';

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";



import React from 'react';
import CompDashBoard from './dash/CompDashboard';
import Container from 'react-bootstrap/esm/Container';

let dataPersona = JSON.parse(localStorage.getItem('dataPersona'));
let dataTrabajo = JSON.parse(localStorage.getItem('dataTrabajo'));
let dataFlujo = JSON.parse(localStorage.getItem('dataFlujo'));
let dataProyecto = JSON.parse(localStorage.getItem('dataProyecto'));

//function App() {
//  return (
//    <div>
//      <CompNav />
//      <Routes>
//        <Route path="dash" element={<CompDashBoard dataProyecto={dataProyecto} dataTrabajo={dataTrabajo} dataFlujo={dataFlujo} dataPersona={dataPersona} />} />
//        <Route path="api" element={<CompAPI />} />
//        <Route path="login" element={<CompLogin />} />
//      </Routes>
//    </div>
//  );
//}
//


function App() {
  return (
    <><CompNav />
      <Container bg="success">
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
              <Route path="/protected/*" element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </Container>
    </>);
}

function Layout() {
  return (
    <div>
      <AuthStatus />
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
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
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
        <button type="submit">Login</button>
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
  console.log("protected");

  return <div>
    <ul>
      <li><Link to="/protected/api">vista api</Link> para descargar la data del servidor.</li>
      <li><Link to="/protected/dash">vista dash</Link> para tener un vistazo general de como se relacionanan las distintas bases de datos.</li>
      <li><Link to="/protected/tablas">vista tablas</Link> para revisar todos los proyectos, trabajos, flujos, etc.</li>
      <li><Link to="/protected/pagination">vista pagination</Link> tablas resumidas</li>
    </ul>
    <Routes>
      <Route path="/api" element={<CompAPI />} />
      <Route path="/tablas" element={<CompTablas dataProyecto={dataProyecto} dataTrabajo={dataTrabajo} dataFlujo={dataFlujo} dataPersona={dataPersona} />} />
      <Route path="/dash" element={<CompDashBoard dataProyecto={dataProyecto} dataTrabajo={dataTrabajo} dataFlujo={dataFlujo} dataPersona={dataPersona} />} />
      <Route path="/pagination" element={<CompPagination />} />
    </Routes>

  </div>;
}


export default App;