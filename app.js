//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
const lista = document.getElementById("listaAmigos");
const nome = document.getElementById("amigo");
const resultado = document.getElementById("resultado");
let sorteado = "";

const limparCampo = (campo) => {
  document.getElementById(campo).value = "";
};

const adicionarAmigo = () => {
  if (nome.value.length <= 0) {
    alert("Por favor, insira um nome.");
  }
  amigos.push(nome.value);
  limparCampo("amigo");
  atualizarLista();
};

const atualizarLista = () => {
  limparLista(lista);
  amigos.forEach((amigo) => {
    const novoItem = document.createElement("li");
    novoItem.textContent = `${amigo}`;
    lista.appendChild(novoItem);
  });
};

const limparLista = (list) => {
  list.innerHTML = "";
};

const sortearAmigo = () => {
  limparLista(resultado);
  if (amigos.length > 0) {
    const lengthArray = amigos.length;
    const lastIndex = lengthArray - 1;
    const randomNum = gerarNumeroAleatorio(0, lastIndex);
    const amigoSorteado = amigos[randomNum];
    sorteado = amigoSorteado;
    exibirResultado();
  }
};

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const exibirResultado = () => {
  const itemResultado = document.createElement("li");
  itemResultado.textContent = sorteado;
  resultado.appendChild(itemResultado);
};
