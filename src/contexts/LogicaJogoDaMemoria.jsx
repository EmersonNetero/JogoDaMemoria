import { createContext } from "react";

const LogicaJogoDaMemoria = createContext();

export function LogicaJogoDaMemoriaProvider({children}){

  const valor = {
    
  };

  return (
    <LogicaJogoDaMemoria.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoria.Provider>
  )
}