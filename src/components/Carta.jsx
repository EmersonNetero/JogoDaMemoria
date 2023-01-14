import classNames from "classnames";
import { useJodoDaMemoria } from "../hooks/useJogoDaMemoria"

export function Carta({id, idDoPar, imagem}) {
  const { virarCarta, idsCartasViradas } = useJodoDaMemoria();

  const controlarClick = () => {
    virarCarta({ id, idDoPar });
  }

  const cartaVirada = idsCartasViradas.includes(id);
  console.log("🚀 ~ file: Carta.jsx:12 ~ Carta ~ idsCartasViradas", idsCartasViradas)
  console.log("🚀 ~ file: Carta.jsx:12 ~ Carta ~ id", id)
  

  const cn = classNames("carta", {
    "carta--virada": cartaVirada
  })

  return (
    <button id={id} className={cn} onClick={controlarClick}>
      <div className="carta__conteudo">
        <div className="carta__frente"></div>
        <div className="carta__costas">
          <img src={imagem} alt={`Carta ${id}`} width={300} />
        </div>
      </div>
    </button>
  )
}