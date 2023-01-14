export function Carta({id, idDoPar, imagem}) {
  return (
    <button id={id} className="carta">
      <div className="carta__conteudo">
        <div className="carta__frente"></div>
        <div className="carta__costas">
          <img src={imagem} alt={`Carta ${id}`} width={300} />
        </div>
      </div>
    </button>
  )
}