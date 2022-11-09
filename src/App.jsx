import { useState } from "react";
import "./App.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";


function App() {
  const [x, setX] = useState("X");
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [erro, setErro] = useState();

  function regraTres() {
    let resultado = (parseFloat(b) / parseFloat(a)) * parseFloat(c);
    if(!isNaN(resultado)){
      setX(resultado.toFixed(1));
      setErro(false)
    }
    else{
      setErro(true)
      setX("")
    }

    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Calculadora de Regra de Três Simples</h2>
        <p>
          A calculadora de regra de três simples permite descobrir um número em
          proporção a outros dois que são conhecidos.
        </p>
      </header>

      <div className="menu">
        <p>opçôes</p>
        <div className="linha1">
          <input
            onChange={(e) => setA(e.target.value)}
            type="text"
            placeholder="       A"
          />{" "}
          ESTA PARA <ArrowForwardIcon style={{color:"orange"}}/>
          <input
            onChange={(e) => setB(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="       B"
          />
        </div>
        <h3>ASSIM COMO</h3>
        <div className="linha2">
          <input
            onChange={(e) => setC(e.target.value)}
            type="text"
            placeholder="       C"
          />{" "}
          ESTA PARA <ArrowForwardIcon style={{color:"red"}}/>
          <input type="text" name="" id="x" value={x} disabled />
        </div>
        
        <Button className="Button" onClick={regraTres} variant="contained">Contained</Button>
        
        <span style={{color:"red"}}>{ erro ? "Erro! informe apenas números" : false}</span>
        

      </div>
      
    </div>
  );
}

export default App;
