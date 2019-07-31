import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // ENTRADA, RODANDO,FIM
  const [estado, setEstado] = useState("ENTRADA");

  //palpite máquina
  const [palpite, setPalpite] = useState(50);
  const [numeroPalpites, setNumeroPalpites] = useState(1);

  // limites
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  // Configurando lógica de busca
  const menor = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };
  // Mudança de estados
  const inicarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(100);
    setNumeroPalpites(1);
    setPalpite(50);
  };
  const voltarAoInicio = () => {
    setEstado("ENTRADA");
  };
  if (estado === "ENTRADA") {
    return <button onClick={inicarJogo}>Começar a Jogar</button>;
  }
  if (estado === "FIM") {
    return (
      <div id="neto">
        <h2>Parabens para mim!!</h2>
        <h4>
          Acertei o {palpite} com {numeroPalpites} tentativas
        </h4>

        <button onClick={inicarJogo}>Tentar novamente!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h4>O seu número é {palpite}?</h4>
      <p>Numero de Palpites: {numeroPalpites}</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior</button>

      <hr />
      <button onClick={voltarAoInicio}>Voltar ao inicio</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
