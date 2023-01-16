import { createContext, useState } from "react";
import { PONTOS, TEMPO_MS } from "../constants/configuracoes";
import { buscarCartas } from "../services/buscarCartasParaJogoDaMemoria";

export const LogicaJogoDaMemoriaContext = createContext();

export function LogicaJogoDaMemoriaProvider({children}){

  const [cartas, setCartas] = useState([]);
  const [carregandoCartas, setCarregandoCartas] = useState(false); 
  const [idsParesEncontrados, setIdsParesEncontrados] = useState([]);
  const [idsCartasViradas, setIdCartasViradas] = useState([]);

  const [quantidadeDeCartasViradas, setQuantidadeDeCartasViradas] = useState(0);
  const [quantidadeDePontos, setQuantidadeDePontos] = useState(0);

  const incrementarQuantidadeDeCartasViradas = () => {
    setQuantidadeDeCartasViradas((quantidade) => quantidade + 1);
  };

  const incrementarPontos = () => {
    setQuantidadeDePontos((pontos) => pontos + PONTOS.ENCONTRAR_CARTA);
  };

  const iniciarJogo = async () => {
    setCarregandoCartas(true);
    const cartas = await buscarCartas(); 
    setCartas(cartas);
    setCarregandoCartas(false);
  }

  const reiniciarJogo = () => {
    iniciarJogo();
    setIdsParesEncontrados([]);
    setIdCartasViradas([]);
    setQuantidadeDeCartasViradas(0);

  }

  const compararCartas = ([id1, id2]) => {
    const idPar1 = cartas.find(({ id }) => id === id1)?.idDoPar;
    const idPar2 = cartas.find(({ id }) => id === id2)?.idDoPar;
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
    
    const tempo = cartasIguais ? 0 : TEMPO_MS.VIRAR_CARTAS;
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
    reiniciarJogo,
    idsCartasViradas,
    idsParesEncontrados,
    carregandoCartas
  };

  return (
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  )
}