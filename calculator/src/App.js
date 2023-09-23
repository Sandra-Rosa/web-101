import React, { useState } from "react";
import "./App.css";
import hand from "./assets/hand.jpg";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="App">
      <div className="div1">
        <h1>ABHIE'S CALCULATOR APPLICATION</h1>
        <img src={hand} alt='calculator' />
      </div>
      <div className="div2">
        <div>
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => setDisplay("")}>C</button>
          <button onClick={calculate}>=</button>
          <button onClick={() => handleClick("/")}>/</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
