import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (categoria) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //   useEffect: es un hook de React que sirve para disparar efectos secundarios.
  //   2parametros: funcion callback, arreglo de dependencias.
  useEffect(() => {
    getGifs(categoria).then((nuevaImagen) => {
      setImages(nuevaImagen);
      setIsLoading(false);
    });
  }, []);

  return {
    images,
    isLoading,
  };
};
