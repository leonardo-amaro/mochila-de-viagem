const form = document.querySelector("#novoItem");

form.addEventListener("submit", evento => {
  evento.preventDefault(); // Evita que o formulário seja enviado e "resetado" antes de ser usado

  console.log(evento.target.elements["nome"].value)
  console.log(evento.target.elements["quantidade"].value)
});
