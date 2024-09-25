import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Asegúrate que este sea el path correcto
import Clases from './Clases';
import Recursos from './Recursos';
import Foro from './Foro';
import Registro from './Registro';
import Login from './Login';
import Inicio from './Inicio';
import Usuario from './Usuario';
import ClasePersonalizada from './ClasePersonalizada';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de Inicio con Header.js */}
        <Route path="/" element={<Layout contenido={<Inicio />} />} />

        {/* Páginas con HeaderIni */}
        <Route path="/clases" element={<Layout contenido={<Clases />} />} />
        <Route path="/recursos" element={<Layout contenido={<Recursos />} />} />
        <Route path="/foro" element={<Layout contenido={<Foro />} />} />
        <Route path="/clase-personalizada" element={<Layout contenido={<ClasePersonalizada />} />} />

        {/* Página de Usuario sin Header */}
        <Route path="/usuario" element={<Layout contenido={<Usuario />} />} />
        <Route path="/registro" element={<Layout contenido={<Registro />} />} />
        <Route path="/login" element={<Layout contenido={<Login />} />} />
      </Routes>
    </Router>
  );
}

export default App;
