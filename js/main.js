const form = document.querySelector("#novoItem");
const lista = document.querySelector(".lista");

function criarItem(quantidade, nome) {
  let li = document.createElement("li");
  li.classList.add("item");
  li.innerHTML = `<strong>${quantidade}</strong>${nome}`;
  lista.appendChild(li);
};

form.addEventListener("submit", evento => {
  evento.preventDefault(); // Evita que o formulário seja enviado e "resetado" antes de ser usado

  criarItem(evento.target.elements["quantidade"].value, evento.target.elements["nome"].value)
});
