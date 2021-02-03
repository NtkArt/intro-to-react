// Primeira regra, importar react do react.
import React from "react";

// Segunda regra, importar a props como parametro
function Input(props) {
          // parametro
  /*
    Para acessar a props ultilizamos,  props.nomeDaProps.
    Como o exemplo anterior, era passado a props name.
    Portanto, acessamos ela com props.name

    Para ver quais props tem, utilizamos console.log(props)
  */
  return (
    <>
      <input placeholder={props.name} type="text" />
    </>
  );
}

export default Input;
