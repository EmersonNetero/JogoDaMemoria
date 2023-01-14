import { useJodoDaMemoria } from "../hooks/useJogoDaMemoria"

export function Placar() {

  const { quantidadeDeCartasViradas, quantidadeDePontos } = useJodoDaMemoria();

  return (
    <div className="placar">
      <Pontos titulo="Pontos" valor={quantidadeDePontos}/>
      <Pontos titulo="Cartas viradas" valor={quantidadeDeCartasViradas}/>
    </div>
  ) 
}


function Pontos({titulo, valor}) {
  return (
    <div className="pontos">
      <strong className="pontos__titulo">
        {titulo}:
      </strong>
      <span className="pontos__valor"> {valor}</span>
    </div>
  )
}