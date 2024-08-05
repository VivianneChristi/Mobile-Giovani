const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const inputNameValue = nome.value;
  const inputEmailValue = email.value;
  const inputAgeValue = idade.value;
  const inputPhoneValue = telefone.value;

  const templateHTML = `
    <li>
      <div>
        <strong>Nome:</strong> ${inputNameValue} <br>
        <strong>Email:</strong> ${inputEmailValue} <br>
        <strong>Idade:</strong> ${inputAgeValue} <br>
        <strong>Telefone:</strong> ${inputPhoneValue}
      </div>
      <button class="delete-button"><img src="./img/icon_lixeira.png" alt="Deletar" class="delete-icon"></button>
    </li>
  `;

  if (inputNameValue === "" || inputEmailValue === "" || inputAgeValue === "" || inputPhoneValue === "") {
    alert("Por favor, preencha todos os campos corretamente.");
    return false;
  }

  lista.innerHTML += templateHTML;

  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.closest('li').remove();
    });
  });

  nome.value = "";
  idade.value = "";
  telefone.value = "";
});

document.addEventListener('DOMContentLoaded', function() {
  const inputTelefone = document.getElementById('telefone');
 
  inputTelefone.addEventListener('input', function(e) {
    let valor = e.target.value;
   
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');
   
    // Formata o número de telefone
    if (valor.length > 6) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (valor.length > 2) {
      valor = valor.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else {
      valor = valor.replace(/^(\d*)$/, '($1');
    }
   
    // Atualiza o valor do input com a formatação
    e.target.value = valor;
  });
});
