import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount((count) => count + 1);
  const dec = () => setCount((count) => count - 1);
  return (
    <>
      <div>
        <h1>Akatsuki</h1>
        <h1>Counter App</h1>
        <p>Current count: {count}</p>
        <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
          <button onClick={dec}>-</button>
          <button onClick={inc}>+</button>
        </div>
      </div>
    </>
  );
}

export default App;
