import React from 'react'
import{ useState, useEffect } from 'react'
import Tarjeta from './Tarjeta';


const ListaApi =()=> {

const [rickandmorty, setRickandmorty] = useState([]);

const obtenerPersonajes = async () => {
    let respuesta= await fetch('https://rickandmortyapi.com/api/character?mame=');
    let datos = await respuesta.json();
    /**console.log(datos.results);*/
    setRickandmorty(datos.results);
}
useEffect(() => {
    obtenerPersonajes();
},[]);

  return (
    <div className= 'container'>
      
        <div className= 'row d-flex '  >
            {
                rickandmorty.map((personajes, indice) => {
                    return (
                        <div className= 'col-md-3 d-flex lista-api '>
                           <Tarjeta key={indice} {...personajes}/>
                        </div>
                        
                    )
                })
            }
        </div>
    </div>
  )
}


export default ListaApi

// objeto_estudiantes.filter(estudiante => {
//     //return estudiante.bootcamp == buscar
//     return estudiante.bootcamp.includes(buscar)
// }).map(estudiante => {
//     //empezando a dibujar el cuerpo de la tabla

//     //creando un elemento html
//     let fila = document.createElement('tr');

//     fila.innerHTML = `
//         <td>${estudiante.nombre}</td>
//         <td>${estudiante.edad}</td>
//         <td>${estudiante.bootcamp}</td>
//         <td>${estudiante.nota}</td>
//     `;

//     //agregando la fila al elemento tbody
//     tabla.appendChild(fila);
// })