import logo from './logo.svg';
import './App.css';

import CompNav from './components/compNav';
import CompLogin from './components/compLogin';
import CompTablas from './components/compTablas';

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
import CompDashBoard from './components/CompDashboard';
import Container from 'react-bootstrap/esm/Container';

let dataPersona = JSON.parse(localStorage.getItem('dataPersona'));
let dataTrabajo = JSON.parse(localStorage.getItem('dataTrabajo'));
let dataFlujo = JSON.parse(localStorage.getItem('dataFlujo'));
let dataProyecto = JSON.parse(localStorage.getItem('dataProyecto'));

//let dataPersona = [
//  {
//    id: 1,
//    nombre: 'Hector',
//    cargo: 'ingeniero de red',
//    tipo: 'especialista',
//  },
//  {
//    id: 2,
//    nombre: 'Juan',
//    cargo: 'gestor PEXT',
//    tipo: 'especialista',
//  },
//  {
//    id: 3,
//    nombre: 'Marco',
//    cargo: 'gestor UMG',
//    tipo: 'especialista',
//  },
//  {
//    id: 4,
//    nombre: 'Maria',
//    cargo: 'asistente',
//    tipo: 'especialista',
//  },
//  {
//    id: 5,
//    nombre: 'Armando',
//    cargo: 'IE',
//    tipo: 'lider',
//  },
//  {
//    id: 6,
//    nombre: 'Luisandra',
//    cargo: 'supervisor',
//    tipo: 'lider',
//  },
//  {
//    id: 7,
//    nombre: 'Melvin',
//    cargo: 'IE',
//    tipo: 'lider',
//  },
//  {
//    id: 8,
//    nombre: 'Josue',
//    cargo: 'IE',
//    tipo: 'lider',
//  }
//]
//
//
//let dataTrabajo = [
//  {
//    id: 1,
//    fkFlujo: 1,
//    fkPersona: 1,
//    trabajo: 'tarea 1',
//    responsable: 'Hector',
//    estado_requiere: 1,
//    estado_activo: 0,
//    estado_finalizado: 0,
//    informacion: 'esta tarea consiste en tal y tal cosas',
//    sede: 'encalada'
//  },
//  {
//    id: 2,
//    fkFlujo: 1,
//    fkPersona: 2,
//    trabajo: 'tarea 2',
//    responsable: 'Juan',
//    estado_requiere: 1,
//    estado_activo: 1,
//    estado_finalizado: 0,
//    informacion: 'esta tarea consiste en tal y tal cosas',
//    sede: 'encalada'
//  },
//  {
//    id: 3,
//    fkFlujo: 1,
//    fkPersona: 3,
//    trabajo: 'tarea 3',
//    responsable: 'Marco',
//    estado_requiere: 0,
//    estado_activo: 0,
//    estado_finalizado: 0,
//    informacion: 'esta tarea consiste en tal y tal cosas',
//    sede: 'encalada'
//  },
//  {
//    id: 4,
//    fkFlujo: 2,
//    fkPersona: 1,
//    trabajo: 'tarea 1',
//    responsable: 'Hector',
//    estado_requiere: 0,
//    estado_activo: 1,
//    estado_finalizado: 0,
//    informacion: 'esta tarea consiste en tal y tal cosas',
//    sede: 'jesus maria'
//  },
//  {
//    id: 5,
//    fkFlujo: 2,
//    fkPersona: 2,
//    trabajo: 'tarea 2',
//    responsable: 'Juan',
//    estado_requiere: 1,
//    estado_activo: 1,
//    estado_finalizado: 1,
//    informacion: 'esta tarea consiste en tal y tal cosas',
//    sede: 'jesus maria'
//  },
//  {
//    id: 6,
//    fkFlujo: 2,
//    fkPersona: 3,
//    trabajo: 'tarea 3',
//    responsable: 'Marco',
//    estado_requiere: 1,
//    estado_activo: 1,
//    estado_finalizado: 0,
//    informacion: 'esta tarea consiste en tal y tal cosas',
//    sede: 'jesus maria'
//  }
//];
//
//let dataFlujo = [
//  {
//    id: 1,
//    fkProyecto: 1,
//    descripcion: 'instalacion de equipos mas FO',
//    coordenadas: [1, 1],
//    inicio: { nombre: 'inicio', id: 0, color: 'lightblue' },
//    fin: { nombre: 'fin', id: 1, color: 'lightblue' },
//    tarea1: { nombre: 'tarea 1', id: 2, color: 'pink' },
//    tarea2: { nombre: 'tarea 2', id: 3, color: 'pink' },
//    tarea3: { nombre: 'tarea 3', id: 4, color: 'pink' },
//    flujo: [
//      { key: 0, text: 'inicio', color: 'lightblue', loc: '0 150' },
//      { key: 1, text: 'fin', color: 'lightblue', loc: '450 150' },
//      { key: 2, text: 'tarea 1', color: 'pink', loc: '300 0' },
//      { key: 3, text: 'tarea 2', color: 'pink', loc: '150 0' },
//      { key: 4, text: 'tarea 3', color: 'pink', loc: '150 300' },
//    ],
//    conexion: [
//      { key: -2, from: 0, to: 3 },
//      { key: -4, from: 4, to: 1 },
//      { key: -5, from: 2, to: 1 },
//      { key: -6, from: 3, to: 4 },
//    ],
//  },
//  {
//    id: 2,
//    fkProyecto: 1,
//    descripcion: 'instalacion de equipos mas FO',
//    coordenadas: [1, 1],
//    inicio: { nombre: 'inicio', id: 0, color: 'lightblue' },
//    fin: { nombre: 'fin', id: 1, color: 'lightblue' },
//    tarea1: { nombre: 'tarea 1', id: 2, color: 'pink' },
//    tarea2: { nombre: 'tarea 2', id: 3, color: 'pink' },
//    tarea3: { nombre: 'tarea 3', id: 4, color: 'pink' },
//    flujo: [
//      { key: 0, text: 'inicio', color: 'lightblue', loc: '0 150' },
//      { key: 1, text: 'fin', color: 'lightblue', loc: '450 150' },
//      { key: 2, text: 'tarea 1', color: 'pink', loc: '300 0' },
//      { key: 3, text: 'tarea 2', color: 'pink', loc: '150 0' },
//      { key: 4, text: 'tarea 3', color: 'pink', loc: '150 300' },
//    ],
//    conexion: [
//      { key: -1, from: 0, to: 2 },
//      { key: -3, from: 0, to: 4 },
//      { key: -5, from: 2, to: 1 },
//      { key: -6, from: 3, to: 4 },
//    ],
//  },
//  {
//    id: 3,
//    fkProyecto: 2,
//    descripcion: 'solo configuracion',
//    coordenadas: [1, 1],
//  },
//  {
//    id: 4,
//    fkProyecto: 2,
//    descripcion: 'solo equipos',
//    coordenadas: [1, 1],
//  },
//];
//
//let dataProyecto = [
//  {
//    id: 1,
//    fkPersona: 6,
//    cliente: 'Universidad de Lima',
//    JP: 'Marco',
//    descripcion: 'Migracion de la cabecera',
//    flujosTotal: 10,
//    flujosResueltos: 5,
//
//  },
//  {
//    id: 2,
//    fkPersona: 7,
//    cliente: 'Rockys',
//    JP: 'Julio Ponce',
//    descripcion: 'baja de enlaces',
//    flujosTotal: 10,
//    flujosResueltos: 5,
//  },
//  {
//    id: 3,
//    fkPersona: 5,
//    cliente: 'Petroperu',
//    JP: 'Katherine',
//    descripcion: 'SDWAN',
//    flujosTotal: 8,
//    flujosResueltos: 7,
//  },
//  {
//    id: 4,
//    fkPersona: 8,
//    cliente: 'Llamagas',
//    JP: 'Karin Mendoza',
//    descripcion: 'cambio de medio',
//    flujosTotal: 15,
//    flujosResueltos: 14,
//  },
//  {
//    id: 5,
//    fkPersona: 8,
//    cliente: 'Chinalco',
//    JP: 'Denisse',
//    descripcion: 'metrolan',
//    flujosTotal: 20,
//    flujosResueltos: 8,
//  },
//  {
//    id: 6,
//    fkPersona: 7,
//    cliente: 'BCP',
//    JP: 'Denisse',
//    descripcion: 'migracion de red',
//    flujosTotal: 12,
//    flujosResueltos: 3,
//  }
//];

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
      <li>
        <Link to="/protected/api">vista api</Link> para descargar la data del servidor.
      </li>
      <li>
        <Link to="/protected/dash">vista dash</Link> para tener un vistazo general de como se relacionanan las distintas bases de datos.
      </li>
      <li>
        <Link to="/protected/tablas">vista tablas</Link> para revisar todos los proyectos, trabajos, flujos, etc.
      </li>
    </ul>
    <Routes>
      <Route path="/api" element={<CompAPI />} />
      <Route path="/tablas" element={ <CompTablas dataProyecto={dataProyecto} dataTrabajo={dataTrabajo} dataFlujo={dataFlujo} dataPersona={dataPersona} />} />
      <Route path="/dash" element={<CompDashBoard dataProyecto={dataProyecto} dataTrabajo={dataTrabajo} dataFlujo={dataFlujo} dataPersona={dataPersona} />} />
    </Routes>

  </div>;
}

export default App;