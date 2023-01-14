import { useContext } from "react"
import { LogicaJogoDaMemoriaContext } from "../contexts/LogicaJogoDaMemoria"

export function useJodoDaMemoria() {
  const contexto = useContext(LogicaJogoDaMemoriaContext)
  return contexto;
}