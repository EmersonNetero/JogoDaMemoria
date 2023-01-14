const imagens = [
  "javascript.png",
  "nextjs.png",
  "reactjs.png",
  "typescript.png",
  "vitejs.png",
  "nodejs.png"
]

const cartasUnicas = imagens.map((imagem, idDoPar) => ({
  idDoPar,
  imagem
}));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map((carta, id) => ({
  ...carta,
  id
}))