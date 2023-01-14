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
    const cartaJaVirada = idsCartasViradas.includes(id) || idsParesEncontrados.includes(idDoPar);
    if (cartaJaVirada) return;
    
    incrementarQuantidadeDeCartasViradas();

    if (idsCartasViradas.length >= 2) {
      return;
    }
    if (idsCartasViradas.length == 0) {
      return setIdCartasViradas([id]);
    }
    setIdCartasViradas((ids) => [...ids, id]);

    const tempo = 1500;
    setTimeout(() => {
      setIdCartasViradas([])
    }, tempo);

  }

  const valor = {
    cartas,
    quantidadeDeCartasViradas,
    quantidadeDePontos,
    virarCarta,
    idsCartasViradas,
    idsParesEncontrados
  };

  return (
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  )
}