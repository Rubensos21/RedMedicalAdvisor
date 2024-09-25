import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Inicio() {
  return (
    <main className="inicio-content">
      <h1>
        Donde la educación <span className="highlight-text">médica</span> se encuentra con <span className="highlight-text">la comunidad</span>
      </h1>

      <p>
        UNA PLATAFORMA IDEAL PARA ESTUDIANTES DE MEDICINA QUE BUSCAN MEJORAR SU APRENDIZAJE. ACCEDE A 
        <Link to="/clases" className="highlight-link"> VIDEO CLASES</Link>, ASESORÍAS PERSONALIZADAS CON TUTORES, UNA BIBLIOTECA DE 
        <Link to="/recursos" className="highlight-link"> RECURSOS</Link> MÉDICOS Y UN 
        <Link to="/foro" className="highlight-link"> FORO</Link> COMUNITARIO PARA COMPARTIR CONOCIMIENTOS Y COLABORAR EN INVESTIGACIONES.
      </p>

      <button>Iniciar Ahora</button>
    </main>
  );
}

export default Inicio;
