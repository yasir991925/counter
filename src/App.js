// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState(0);
  let x = "value ";
  if (val === 0) {
    x = "value red";
  }

  return (
    <div className="App">
      <div className="main">
        <h1 className={x}>{val}</h1>
      </div>
      <div className="controls">
        <button onClick={() => setVal(val + 1)}>+1</button>
        <button onClick={() => setVal(Math.max(0, val - 1))}>-1</button>
        <button onClick={() => setVal(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
