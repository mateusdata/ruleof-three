import { useState, useEffect } from "react";
import "./App.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";


function App() {
  const [x, setX] = useState("X");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [erro, setErro] = useState();
 

  function limparInputs() {
    setX("X");
    setA("");
    setB("");
    setC("");
    setErro(false);
  }

  function regraTres() {
    let resultado = (parseFloat(b) / parseFloat(a)) * parseFloat(c);
    if (!isNaN(resultado)) {
      setX(resultado.toFixed(2));
      setErro(false);

    
    } else {
      setErro(true);
      setX("X");
    }
  }

  useEffect(() => {
    if (a && b && c) regraTres();
    // eslint-disable-next-line
  });

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
            value={a}
            placeholder="A"
          />{" "}
          ESTA PARA <ArrowForwardIcon style={{ color: "orange" }} />
          <input
            onChange={(e) => setB(e.target.value)}
            type="text"
            name=""
            id=""
            value={b}
            placeholder="B"
          />
        </div>
        <h3>ASSIM COMO</h3>
        <div className="linha2">
          <input
            onChange={(e) => setC(e.target.value)}
            type="text"
            value={c}
            placeholder="C"
          />{" "}
          ESTA PARA <ArrowForwardIcon style={{ color: "red" }} />
          <input type="text" name="" id="x" value={x} disabled />
        </div>

        {c && (
          <Button className="Button" onClick={limparInputs} variant="contained">
            Limpar
          </Button>
        )}

        <span style={{ color: "red" }}>
          {erro ? "Erro! informe apenas números" : false}
        </span>
      </div>
    </div>
  );
}

export default App;
