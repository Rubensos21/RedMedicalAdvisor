import React, { useState, useEffect } from 'react';
import './Orbes.css';

function Orbes() {
  const [orbes, setOrbes] = useState([]);

  // Función para generar posiciones aleatorias
  const generarPosicionAleatoria = () => {
    const posiciones = [];
    for (let i = 0; i < 3; i++) {
      const size = Math.random() * (500 - 200) + 200; // Tamaño entre 200px y 500px
      const top = Math.random() * 80; // Máximo 80% del alto
      const left = Math.random() * 80; // Máximo 80% del ancho
      posiciones.push({ size, top, left });
    }
    return posiciones;
  };

  useEffect(() => {
    // Generar nuevas posiciones cuando el componente se monte
    setOrbes(generarPosicionAleatoria());
  }, []);

  return (
    <div className="orbes-container">
      {orbes.map((orbe, index) => (
        <div
          key={index}
          className="orbe"
          style={{
            width: `${orbe.size}px`,
            height: `${orbe.size}px`,
            top: `${orbe.top}%`,
            left: `${orbe.left}%`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default Orbes;
