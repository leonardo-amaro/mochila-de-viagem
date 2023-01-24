/* -Referências--------- */
const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
const itens = JSON.parse(localStorage.getItem("itens")) || []; // Converter a string do Local Storage em JSON (parse) e armazenar

/* -Funcionalidades--------- */
function armazenarItem(quantidade, nome) {
  const itemAtual = {
    "nome": nome,
    "quantidade": quantidade
  };

  itens.push(itemAtual);
  localStorage.setItem("itens", JSON.stringify(itens)) // Converter o array de objetos em string para armazenar no Local Storage
};

function criarItem(quantidade, nome) {
  let li = document.createElement("li");
  li.classList.add("item");
  li.innerHTML = `<strong>${quantidade}</strong>${nome}<img src="../svg/trash.svg" alt="ícone lixeira" data-deletar>`;
  lista.appendChild(li);
};

function atualizarLista() {
  lista.innerHTML = "";
  itens.forEach(elemento => {
    criarItem(elemento.quantidade, elemento.nome)
  })
};

/* -Eventos--------- */
document.addEventListener("DOMContentLoaded", () => atualizarLista());

form.addEventListener("submit", evento => {
  evento.preventDefault(); // Evita que o formulário seja enviado e "resetado" antes de ser usado

  const quantidade = evento.target.elements["quantidade"];
  const nome = evento.target.elements["nome"];

  armazenarItem(quantidade.value, nome.value);
  atualizarLista();

  quantidade.value = ""; // Limpar campo "quantidade"
  nome.value = "" // Limpar campo "nome"
});
