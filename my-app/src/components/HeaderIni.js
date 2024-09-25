import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderIni.css'; // Nuevo archivo de estilos

function HeaderIni() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/iconos/rmalogo.svg" alt="Red Medical Advisor Logo" /> 
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/clases" className={({ isActive }) => isActive ? 'active' : ''}>
              Clases
            </NavLink>
          </li>
          <li>
            <NavLink to="/recursos" className={({ isActive }) => isActive ? 'active' : ''}>
              Recursos
            </NavLink>
          </li>
          <li>
            <NavLink to="/foro" className={({ isActive }) => isActive ? 'active' : ''}>
              Foro
            </NavLink>
          </li>
          <li>
            <NavLink to="/clase-personalizada" className={({ isActive }) => isActive ? 'active' : ''}>
              Clase Personalizada
            </NavLink>
          </li>
          <li>
            <NavLink to="/usuario" className="user-icon">
              <img src="/iconos/user.svg" alt="User Icon" className="user-icon-svg" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderIni;
