import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HandleClick3 from "./HandleClick3";

function App() {
  function HandleClick() {
    alert("Clciked me!");
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React + Kabbo</h1>
      <button onClick={HandleClick}>Click Me</button>
      <button onClick={HandleClick3}>Click Me 3</button>

      <button onClick={() => alert("Click 4 Clicked")}>Click Me 4</button>
      {/* Arrow Function wrapping */}
      <button onClick={() => handleAdd5(20)}>Click Add 5</button>
    </>
  );
}

export default App;
