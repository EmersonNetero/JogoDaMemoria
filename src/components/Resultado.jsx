import { useMemo } from "react";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";
import classNames from "classnames"
import { resultados } from "../constants/resultados";

export function Resultado() {

  const { idsParesEncontrados, cartas, quantidadeDeCartasViradas } = useJogoDaMemoria();

  const jogoFinalizou = cartas.length === idsParesEncontrados.length * 2;

  const cn = classNames("resultado", {
    "resultado--aberto": jogoFinalizou
  })

  const taxaDeAcertos = cartas.length / quantidadeDeCartasViradas * 100; // porcentagem
  const resultado = useMemo(() => {
    return resultados.find(({ min }) => min < taxaDeAcertos);
  }, [taxaDeAcertos]);

  return (
    <div className={cn}>
      <div className="resultado__caixa">
        <p>Seu nível de memória é:</p>
        <h1>{resultado?.titulo}</h1>
        <img src={resultado?.imagem} alt="Imagem referente ao nível de memória" height={150} />
        <p>
          <strong>Taxa de acertos: </strong>
          <span>{taxaDeAcertos.toFixed(0)}%</span>
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