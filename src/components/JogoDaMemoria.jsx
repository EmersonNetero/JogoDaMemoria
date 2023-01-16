import { Carta } from "./Carta";
import { Placar } from "./Placar";
import { Resultado } from "./Resultado";
import { LogicaJogoDaMemoriaProvider } from "../contexts/LogicaJogoDaMemoria";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";
import { useEffect } from "react";


export function JogoDaMemoria() {
  return (
    <LogicaJogoDaMemoriaProvider>
      <JogoDaMemoriaConteudo />
    </LogicaJogoDaMemoriaProvider>
  )
}


export function JogoDaMemoriaConteudo() {

  const { cartas, iniciarJogo, carregandoCartas } = useJogoDaMemoria();

  useEffect(() => {
    iniciarJogo();
  }, []);

  return (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria__conteudo">
        <h1>Jogo da Memória</h1>
        <Placar />
          {carregandoCartas? (
            <p>Carregando as cartas...</p>
          ): (
            <div className="jogo-da-memoria__cartas">
              {cartas.map((carta) => <Carta key={carta.id} {...carta}/>)}
            </div>
          )}
      </div>
      <Resultado />
    </div>
  )
}