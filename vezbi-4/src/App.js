import { useState } from "react";
import "./App.css";
import ShowMessage from "./ShowMessage";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Hello World Kristijan</h1>
      <ShowMessage name="Kristjan" message="Ove e poraka za Zdravo!" />

      <h3>Counter value is {counter}</h3>

      <div>
        <button onClick={() => setCounter(counter + 1)}>
          Zgolemi vrednost
        </button>
        <button onClick={() => setCounter(counter - 1)}>Namali vrednost</button>
      </div>
    </div>
  );
}

export default App;
