import React, { useState } from 'react';


export function MiComponente() {
  return (
    <div>
      <h1>Hola, mundo!</h1>
    </div>
  );
}

export function Saludo(props) {
    return <h1>Hola, {props.nombre}</h1>;
  }

  export function Contador() {
    const [contador, setContador] = useState(0);
  
    const incrementarContador = () => {
      setContador(contador + 1);
    };
  
    return (
      <div>
        <p>Contador: {contador}</p>
        <button onClick={incrementarContador}>Incrementar</button>
      </div>
    );
  }
  