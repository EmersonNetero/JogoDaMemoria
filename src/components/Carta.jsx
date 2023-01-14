import classNames from "classnames";
import { useJodoDaMemoria } from "../hooks/useJogoDaMemoria"

export function Carta({id, idDoPar, imagem}) {
  const { virarCarta, idsCartasViradas, idsParesEncontrados } = useJodoDaMemoria();

  const controlarClick = () => {
    virarCarta({ id, idDoPar });
  }

  const cartaEncontrada = idsParesEncontrados.includes(idDoPar);
  const cartaVirada = cartaEncontrada || idsCartasViradas.includes(id);
  const bloqueado = cartaVirada;
  
  const cn = classNames("carta", {
    "carta--virada": cartaVirada
  })

  return (
    <button id={id} className={cn} onClick={controlarClick} disabled={bloqueado}>
      <div className="carta__conteudo">
        <div className="carta__frente"></div>
        <div className="carta__costas">
          <img src={imagem} alt={`Carta ${id}`} width={300} />
        </div>
      </div>
    </button>
  )
}