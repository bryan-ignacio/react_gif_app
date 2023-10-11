import React, { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// Componente Funcional.
// cada vez que detecta un cambio en el componente lo vuelve a renderizar el componente.
export const GifGrid = ({ categoria }) => {
  const { images, isLoading } = useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((elemento) => (
          <GifItem
            key={elemento.id}
            // voy a exparcir todas las propiedades del elemento.
            {...elemento}
            // titulo={elemento.titulo}
            // url={elemento.url}
            // elemento={elemento}
          />
        ))}
      </div>
    </>
  );
};
