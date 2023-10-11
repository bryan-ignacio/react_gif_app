import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// Api Key: fBtNoKiivyqTNkX0uUT4fLiapCoF6sgH

export const GifApp = () => {
  // necesitamos un hook de react para mantener el estado del componente.
  const [categories, setCategories] = useState(["Adventure Time"]);
  // console.log(categories);

  const onAddCategory = (newCategory) => {
    // agregar una category.
    // setCategories((valorActual) => valorActual.push("Valorant"));
    // push es usado para mutar el objeto.
    console.log(newCategory);
    // para validar si se encuentra la categoria en el input.
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>Gif Application</h1>
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* TextBox: para ingresar text input. */}
      {/* nuevo Componente */}
      {/* mandamos la referencia de la funcion que modifica el arreglo. */}
      {/* <AddCategory funcionsetArreglo={setCategories} /> */}
      <AddCategory onNewCategory={(e) => onAddCategory(e)}></AddCategory>
      {/* Listado de Gifs */}
      {categories.map((categoria) => {
        return (
          // agregamos un componente GifGrid.
          <GifGrid key={categoria} categoria={categoria} />
        );
      })}
    </>
  );
};
