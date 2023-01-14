import { createContext, useState } from "react";

export const LogicaJogoDaMemoriaContext = createContext();

export function LogicaJogoDaMemoriaProvider({children}){

  const [cartas, setCartas] = useState([]);
  const [idsParesEncontrados, setIdsParesEncontrados] = useState([]);
  const [idsCartasViradas, setIdCartasViradas] = useState([]);

  const [quantidadeDeCartasViradas, setQuantidadeDeCartasViradas] = useState(0);
  const [quantidadeDePontos, setQuantidadeDePontos] = useState(0);

  const incrementarQuantidadeDeCartasViradas = () => {
    setQuantidadeDeCartasViradas((quantidade) => quantidade + 1);
  }

  const virarCarta = ({id, idDoPar}) => {
    incrementarQuantidadeDeCartasViradas();
  }

  const valor = {
    cartas,
    quantidadeDeCartasViradas,
    quantidadeDePontos,
    virarCarta,
  };

  return (
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  )
}