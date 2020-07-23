import React from "react";

function Hello() {
  const sayHello = () => console.log("HOLA");

  return (
    <div>
      <button onClick={sayHello}>Hi!</button>
    </div>
  );
}

export default Hello;
