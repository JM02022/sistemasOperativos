import React, { useState } from 'react';

const MRU = () => {
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
    { numero: '1', tiempo: '12' },
    { numero: '2', tiempo: '15' },
    { numero: '3', tiempo: '20' },
    { numero: '4', tiempo: '100' },
    { numero: '5', tiempo: '180' },
  ]);
  const [pagNueva, setPagNueva] = useState({ numero: '10', tiempo: '1' });

  const handleButtonClick = () => {
    // Incrementa en 1 el tiempo de todos los elementos existentes
    const paginasActualizadas = paginas.map((pagina) => ({
      ...pagina,
      tiempo: String(Number(pagina.tiempo) + 1),
    }));

    // Encuentra la página con el tiempo mínimo
    const paginaMinTiempo = paginasActualizadas.reduce((minPagina, pagina) =>
      Number(pagina.tiempo) < Number(minPagina.tiempo) ? pagina : minPagina
    );

    // Reemplaza la página con el tiempo mínimo con la nueva página
    const nuevasPaginas = paginasActualizadas.map((pagina) =>
      pagina === paginaMinTiempo ? pagNueva : pagina
    );

    // Actualiza la nueva página para la próxima inserción
    setPagNueva({
      numero: String(Math.floor(Math.random() * 100) + 1),
      tiempo: '1',
    });

    // Actualiza el estado del arreglo de páginas
    setPaginas(nuevasPaginas);
  };

  return (
    <div style={contenedorStyle}>
      <h1 style={{ color: '#000', marginBottom: '20px' }}>Simulación Algoritmo MRU</h1>
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
                <div>{`Tiempo: ${pagina.tiempo}`}</div>
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

export default MRU;
