import { paresDeCartas } from "../constants/cartas"

export const buscarCartas = async () => {
  await delay(2000);
  return embaralharList(paresDeCartas);
} 

const delay = (tempo = 2000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, tempo);
  })
}

const embaralharList = (lista = []) => {

  for (let idx = lista.length - 1; idx > 0; idx--) {
    const idxAleatorio = Math.floor(Math.random() * (idx + 1));
    const item = lista[idx];

    const itemAleatorio = lista[idxAleatorio];
    lista[idx] = itemAleatorio;
    lista[idxAleatorio] = item;

  }

  return lista;
}