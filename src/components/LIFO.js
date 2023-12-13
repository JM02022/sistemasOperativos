import React, { useState } from 'react';

const LIFO = () => {
  const contenedorStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',  // Alinea los elementos en columna
    height: '80vh',
  };

  const contenedorExteriorStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const rectanguloExteriorStyle = {
    backgroundColor: '#000', /* Negro */
    height: '200px',
    width: '150px',  // Ancho del rectángulo adicional a la izquierda
    marginRight: '80px',  // Ajusta el margen derecho para separarlos
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const rectanguloInteriorStyle = {
    backgroundColor: '#4CAF50', /* Verde */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '160px',
    width: '500px',
  };

  const cuboStyle = {
    backgroundColor: '#000', /* Negro */
    color: '#fff', /* Texto en blanco */
    width: '50px',
    height: '80px',
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',  // Centra el contenido verticalmente
    alignItems: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50', /* Verde */
    color: '#fff', /* Texto en blanco */
    padding: '10px',
    margin: '10px',
    cursor: 'pointer',
  };

  const [paginas, setPaginas] = useState([
    { numero: '1', orden: '5' },
    { numero: '2', orden: '4' },
    { numero: '3', orden: '3' },
    { numero: '4', orden: '2' },
    { numero: '5', orden: '1' },
  ]);
  const [pagNueva,setpagNueva] = useState({numero:'10',orden:'6'});
  const [cont,setCont] = useState(7)
  const handleButtonClick = () => {
    // Elimina el último elemento del arreglo
    const paginasActualizadas = paginas.slice(1);
  
  
    // Agrega la nueva página al principio del arreglo
    const nuevasPaginas = [pagNueva, ...paginasActualizadas];
  
    // Actualiza el estado de la nueva página para la próxima inserción
    setpagNueva({
      numero: String(Math.floor(Math.random() * 100) + 1),  // Cambia esto a lo que desees
      orden: String(cont),        // Cambia esto a lo que desees
    });
    setCont(cont+1)
  
    // Actualiza el estado del arreglo de páginas
    setPaginas(nuevasPaginas);
  };
  
  return (
    <div style={contenedorStyle}>
      <h1 style={{ color: '#000', marginBottom: '20px' }}>Simulación Algoritmo LIFO</h1>
      <div style={contenedorExteriorStyle}>
        <div style={rectanguloExteriorStyle}>
          <div style={{ color: '#fff' }}>Memoria</div>
          <div style={{ color: '#fff' }}>Pagina: {pagNueva.numero}</div>
        </div>
        <div style={rectanguloInteriorStyle}>
          <div style={{ display: 'flex' }}>
            {paginas.map((pagina, index) => (
              <div key={index} style={cuboStyle}>
                <div>{`Página: ${pagina.numero}`}</div>
                <div>{`N°entrada: ${pagina.orden}`}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button style={buttonStyle} onClick={handleButtonClick}>
        Iniciar simulación
      </button>
    </div>
  );
};

export default LIFO;
