import { useContext } from "react"
import { LogicaJogoDaMemoriaContext } from "../contexts/LogicaJogoDaMemoria"

export function useJogoDaMemoria() {
  const contexto = useContext(LogicaJogoDaMemoriaContext)
  return contexto;
}