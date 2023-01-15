import { createContext, useState } from "react";
import { paresDeCartas } from "../constants/cartas";

export const LogicaJogoDaMemoriaContext = createContext();

export function LogicaJogoDaMemoriaProvider({children}){

  const [cartas, setCartas] = useState([]);
  const [idsParesEncontrados, setIdsParesEncontrados] = useState([]);
  const [idsCartasViradas, setIdCartasViradas] = useState([]);

  const [quantidadeDeCartasViradas, setQuantidadeDeCartasViradas] = useState(0);
  const [quantidadeDePontos, setQuantidadeDePontos] = useState(0);

  const incrementarQuantidadeDeCartasViradas = () => {
    setQuantidadeDeCartasViradas((quantidade) => quantidade + 1);
  };

  const incrementarPontos = () => {
    setQuantidadeDePontos((pontos) => pontos + 5);
  };

  const iniciarJogo = () => {
    setCartas(paresDeCartas);
  }

  const compararCartas = ([id1, id2]) => {
    const idPar1 = cartas.find(({ id }) => id === id1)?.idDoPar;
    const idPar2 = cartas.find(({ id }) => id === id2)?.idDoPar;
    console.log(id1, id2);
    return idPar1 === idPar2;
  }

  const virarCarta = ({id, idDoPar}) => {
    const cartaJaVirada = idsCartasViradas.includes(id)
    || idsParesEncontrados.includes(idDoPar);
    if (cartaJaVirada) return;
    
    incrementarQuantidadeDeCartasViradas();

    if (idsCartasViradas.length >= 2) {
      return;
    }
    if (idsCartasViradas.length == 0) {
      return setIdCartasViradas([id]);
    }

    const ids = [idsCartasViradas[0], id];
    setIdCartasViradas(ids);

    const cartasIguais = compararCartas(ids);
    if (cartasIguais) {
      incrementarPontos();
      setIdsParesEncontrados((ids) => [...ids, idDoPar]);
    }
    console.log("🚀 ~ file: LogicaJogoDaMemoria.jsx:52 ~ virarCarta ~ cartasIguais", cartasIguais);
    const tempo = cartasIguais ? 0 : 1500;
    setTimeout(() => {
      setIdCartasViradas([])
    }, tempo);
  }

  const valor = {
    cartas,
    quantidadeDeCartasViradas,
    quantidadeDePontos,
    virarCarta,
    iniciarJogo,
    idsCartasViradas,
    idsParesEncontrados
  };

  return (
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  )
}