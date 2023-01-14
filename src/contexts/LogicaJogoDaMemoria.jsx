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
    setIdCartasViradas((ids) => [...ids, id]);
  }

  const valor = {
    cartas,
    quantidadeDeCartasViradas,
    quantidadeDePontos,
    virarCarta,
    idsCartasViradas
  };

  return (
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  )
}