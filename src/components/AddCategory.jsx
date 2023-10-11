import React from "react";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  // necesito manejar el estado de este input.
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    // justo cuando la persona escribe modifica el compo.
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };

  // nueva funcion
  const onSubmit = (e) => {
    console.log(e);
    // para evitar que se haga un refresh de la web.
    e.preventDefault();
    // el que se envia para actualizar la info en padre.

    console.log(inputValue);

    //validacion borrar espacios a los lados si el valor de entra es menor a 1 retorna.
    if (inputValue.trim().length <= 1) {
      return;
    }

    // desde aca actualizar el arreglo que esta en el otro componente gifApp
    onNewCategory(inputValue.trim());
    // borrar el valor del input.
    setInputValue("");
  };
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="buscar gif"
          value={inputValue}
          onChange={(e) => onInputChange(e)}
        />
      </form>
    </>
  );
};
