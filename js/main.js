const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
const itens = [];

function criarItem(quantidade, nome) {
  let li = document.createElement("li");
  li.classList.add("item");
  li.innerHTML = `<strong>${quantidade}</strong>${nome}`;
  lista.appendChild(li);

  const itemAtual = {
    "nome": nome,
    "quantidade": quantidade
  };

  itens.push(itemAtual);

  localStorage.setItem("item", JSON.stringify(itens))
};

form.addEventListener("submit", evento => {
  evento.preventDefault(); // Evita que o formulário seja enviado e "resetado" antes de ser usado

  const quantidade = evento.target.elements["quantidade"];
  const nome = evento.target.elements["nome"];

  criarItem(quantidade.value, nome.value);

  quantidade.value = ""; // Limpar campo "quantidade"
  nome.value = "" // Limpar campo "nome"
});
