import React from "react";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ListaPersonas from "./ListaPersonas";
import AgregarPersona from "./AgregarPersona";
import EditarPersona from "./EditarPersona";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Proyecto Crud Delight</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/agregarpersona">Agregar Persona</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" aria-disabled="true" to="#">Disabled</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<ListaPersonas />} exact></Route>
          <Route path='/agregarpersona' element={<AgregarPersona />} exact></Route>
          <Route path='/editarpersona/:idpersona' element={<EditarPersona />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
