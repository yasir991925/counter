// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState(0);

  return (
    <div className="App">
      <div className="main">
        <h1 className="value">{val}</h1>
        <div className="controls">
          <button className="hover-green" onClick={() => setVal(val + 1)}>
            +1
          </button>
          <button className="hover-red" onClick={() => setVal(Math.max(0, val - 1))}>
            -1
          </button>
          <button onClick={() => setVal(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
