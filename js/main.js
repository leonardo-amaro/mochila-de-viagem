const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || []; // Converter a string do Local Storage em JSON (parse) e armazenar

itens.forEach((elemento) => criaElemento(elemento));

function criaElemento(item) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = item.quantidade;
  numeroItem.dataset.id = item.id;
  novoItem.appendChild(numeroItem);

  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);
};

function atualizaElemento(item) {
  document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade; // Substitui o número anterior pelo novo
};

form.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita que o formulário seja enviado e "resetado" antes de ser usado
  
  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];
  
  const existe = itens.find((elemento) => elemento.nome === nome.value);
  
  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };
  
  if (existe) {
    itemAtual.id = existe.id;
    atualizaElemento(itemAtual);
    itens[existe.id] = itemAtual; // Atualiza o ítem no Array que vai para o Local Storage
  } else {
    itemAtual.id = itens.length;
    criaElemento(itemAtual);
    itens.push(itemAtual);
  };

  localStorage.setItem("itens", JSON.stringify(itens)); // Converter o array de objetos em string para armazenar no Local Storage

  nome.value = "";
  quantidade.value = "";
});
