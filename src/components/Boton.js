import React, { useState } from "react";
import { Imagen } from "./Imagen";

export const Boton = () => {
  const [imagen, guardarImagen] = useState();
  let date = '' // fecha que se pasa por parametro
  const key = 'Rezp1qEBsyhNhxXifYbQK99dbpgoULP9ZxzQhhCA';

  const consultarAPI = async () => {
    const api = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`
    );
    const imagen = await api.json();
    guardarImagen(imagen);
  };

  return (
    <>
      <form>
        <input
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          type="date"
          onChange={ e => date = (e.target.value)}
        ></input>
        <a
          href="#"
          className="px-8 rounded-r-lg bg-blue-900 text-green-100 font-bold p-4 uppercase border-blue-500 border-t border-b border-r"
          type="submit"
          onClick={consultarAPI}
        >
          Buscar
        </a>
      </form>
      { imagen 
          ? <Imagen imagen={imagen} />
          : <p className="pt-5 font-semibold text-xl">Coloca cualquier fecha</p>
      }
      
    </>
  );
};
