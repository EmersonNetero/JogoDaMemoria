import { Carta } from "./Carta";
import { Placar } from "./Placar";
import { paresDeCartas } from "../constants/cartas";
import { Resultado } from "./Resultado";

export function JogoDaMemoria() {
  return (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria__conteudo">
        <h1>Jogo da Memória</h1>
        <Placar />
        <div className="jogo-da-memoria__cartas">
          {paresDeCartas.map((carta) => <Carta key={carta.id} {...carta}/>)}
        </div>
      </div>
      <Resultado />
    </div>
  )
}