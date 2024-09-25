import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
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
          <div className='register'>
            <li>
              <NavLink to="/registro" className="register-btn">
              Regístrate
              </NavLink>
            </li>
          </div>

          <li>
            <NavLink to="/login" className="login-btn">
              Iniciar Sesión
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
