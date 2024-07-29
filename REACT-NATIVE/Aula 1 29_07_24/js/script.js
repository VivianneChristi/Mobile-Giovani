const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

/*Eventos de JavaScript */

button.addEventListener("click", (e) => {
  e.preventDefault();

  // Obtém os valores dos inputs
  const inputNameValue = nome.value;
  const inputAgeValue = idade.value;
  const inputPhoneValue = telefone.value;

  // Cria o template HTML para o item da lista
  const templateHTML = `
       <li>
           <strong>Nome:</strong> ${inputNameValue} <br>
           <strong>Idade:</strong> ${inputAgeValue} <br>
           <strong>Telefone:</strong> ${inputPhoneValue}
       </li>
   `;

  // Verifica se todos os campos estão preenchidos
  if (inputNameValue === "" || inputAgeValue === "" || inputPhoneValue === "") {
    alert("Por favor, preencha todos os campos corretamente.");
    return false;
  }

  // Inclui o item na lista HTML
  lista.innerHTML += templateHTML;

  // Limpa os campos após adicionar à lista
  nome.value = "";
  idade.value = "";
  telefone.value = "";
});
