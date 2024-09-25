import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import HeaderIni from './HeaderIni';
import Orbes from './Orbes';

function Layout({ contenido }) {
  const location = useLocation();

  //const shouldRenderHeader = location.pathname !== '/usuario'; // No mostrar header en Usuario.js
  const shouldRenderHeaderIni = location.pathname !== '/' && location.pathname !== '/usuario' && location.pathname !== '/login' && location.pathname !== '/registro';  // Mostrar HeaderIni en todas menos Inicio y Usuario

  return (
    <div>
      {location.pathname === '/' && <Header />} {/* Mostrar Header.js en Inicio */}
      {shouldRenderHeaderIni && <HeaderIni />} {/* Mostrar HeaderIni en otras páginas excepto Inicio y Usuario */}
      <Orbes />
      <main>
        {contenido} {/* Aquí va el contenido de cada página */}
      </main>
    </div>
  );
}

export default Layout;
