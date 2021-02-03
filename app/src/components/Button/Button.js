import React from "react"; // Primeira regra, importar react do react.

function Button() {
  //Segunda Regra, criar uma function.
  return (
    // Terceira regra, Uma function React SEMPRE retorna um componente.
    <>
      <button>Clique me</button>
    </>
  );
}

// QUARTA REGRA: Para importar algo no react, primeiro eh necessario exportar.
export default Button;
