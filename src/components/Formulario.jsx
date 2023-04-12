import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [personaje, setPersonaje] = useState(null); 
  const [error, setError] = useState(null); // Nuevo estado para manejar los errores

  const handleName = (e) => {
    console.log(e.target.value);
    setNombre(e.target.value);
  }

  const obtenerPersonajePorNombre = async () => {
    try {
      const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
      const datos = await respuesta.json();

      if (datos.results.length === 0) { // Si no se encuentra ningún personaje con el nombre buscado, mostrar un mensaje de error
        setError(`No se encontró ningún personaje con el nombre "${nombre}"`);
        setPersonaje(null);
      } else {
        setPersonaje(datos.results[0]); 
        setError(null); // Si se encuentra un personaje, eliminar cualquier mensaje de error anterior
      }
    } catch (error) {
      console.log(error);
      setError(`Hubo un error al buscar el personaje "${nombre}". Por favor, inténtalo de nuevo.`);
      setPersonaje(null);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    obtenerPersonajePorNombre();
  }

  console.log(personaje);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingrese Personaje' className='form-control' onChange={handleName} /><br />
        <button className='btn btn-dark btn-search' type='submit'>Buscar Personaje</button>
      </form>
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
      {personaje && (
        <div className='buscadorPersonajes'>
            <div className='buscadorItem'>
          <h2>{personaje.name}</h2>
          <img src={personaje.image} alt={personaje.name} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Formulario;
