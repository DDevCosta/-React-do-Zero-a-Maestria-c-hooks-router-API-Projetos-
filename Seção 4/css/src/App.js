import './App.css';
import MyComponent from './components/MyComponent';

import { useState } from "react"

function App() {
const n = 15
const [name] = useState("Arthur")

const redTitle = true

  return (
    <div className="App">

      <h1>React com CSS</h1>
      <MyComponent />

      <p>Este parágrafo é do APP.js</p>

      <p className="wow" style={{
        color: "black", 
        padding: "25px", 
        borderTop: "2px solid black"
      }}>
        Este elemento foi estilizado de forma inline
      </p>

      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS dinâmico
        </h2>

        <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS dinâmico
        </h2>

        <h2 style={
          name === "Arthur" ? 
          {color: "cyan", backgroundColor: "black"} 
          : null
          }>
        Teste nome
        </h2>

          <h2 className={redTitle ? "red-title" : "title"}>
            Este título vai ter classe dinâmica
          </h2>
    </div>
  );
}

export default App;
