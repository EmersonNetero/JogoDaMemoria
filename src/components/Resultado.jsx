export function Resultado() {
  return (
    <div className="resultado">
      <div className="resultado__box">
        <p>Seu nível de memória é:</p>
        <h1>Bom</h1>
        <img src="/kitekat-3.png" alt="Imagem referente ao nível de memória" height={150} />
        <p>
          <strong>Taxa de acertos: </strong>
          <span>60%</span>
        </p>
        <button className="button">
          Nova Partida
        </button>
        <p>
          <small>
            * Essa análise é ilustrativa e não possui base científica.
          </small>
        </p>
      </div>
    </div>
  )
}