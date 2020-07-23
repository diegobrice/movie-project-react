import React, { useState } from "react";

function Counter() {
  let [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="row">
      <div className="col">
        <h1 className={isRed ? "bg-warning" : ""}>{count}</h1>
        <button onClick={increment} className="btn btn-secondary">
          Add
        </button>
      </div>
    </div>
  );
}

export default Counter;
