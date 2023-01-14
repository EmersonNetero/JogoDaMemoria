import { useJodoDaMemoria } from "../hooks/useJogoDaMemoria"

export function Carta({id, idDoPar, imagem}) {
  const { virarCarta } = useJodoDaMemoria();

  const controlarClick = () => {
    virarCarta({ id, idDoPar });
  }

  return (
    <button id={id} className="carta" onClick={controlarClick}>
      <div className="carta__conteudo">
        <div className="carta__frente"></div>
        <div className="carta__costas">
          <img src={imagem} alt={`Carta ${id}`} width={300} />
        </div>
      </div>
    </button>
  )
}