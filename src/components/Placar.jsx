export function Placar() {
  return (
    <div className="placar">
      <Pontos titulo="Pontos" valor={0}/>
      <Pontos titulo="Cartas viradas" valor={0}/>
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