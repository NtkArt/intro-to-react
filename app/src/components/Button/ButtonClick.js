import React, { useState } from "react"; // Primeira regra, importar react do react.
//Segunda Regra: Importar o useState de dentro de React.

function ButtonClick(props) {
  // Terceira regra: Criar um estado e um manipulador de estado
  const [contador, setContador] = useState(0);
  //estado    manipulador
  // Defini o estado, o manipulador e o estado inicial.
  return (
    <>
      <button onClick={() => setContador(contador + 1)}>Clique me</button>
      {/* 1 -Acionei o listener onClick
          2 - Criei uma arrow function que chama o manipulador de estado
          3 - No manipulador de estado, defini a manipulacao.
          ou seja
          Defini que o setContador, pegava o contador e somava um.
      */}
      <p>Voce me clicou {contador} vezes</p>
      {/* Ultilizei o estado como variavel html
        passando {} antes da variavel que quero utilizar.
      */}
    </>
  );
}

export default ButtonClick;
