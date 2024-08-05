const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const nascimento = document.querySelector("#nascimento");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const inputNameValue = nome.value;
  const inputEmailValue = email.value;
  const inputNascimentoValue = nascimento.value;
  const inputPhoneValue = telefone.value;

  if (inputNameValue === "" || inputEmailValue === "" || inputNascimentoValue === "" || inputPhoneValue === "") {
    alert("Por favor, preencha todos os campos corretamente.");
    return false;
  }

  const idade = calcularIdade(new Date(inputNascimentoValue));
  
  const templateHTML = `
    <li>
      <div>
        <strong>Nome:</strong> ${inputNameValue} <br>
        <strong>Email:</strong> ${inputEmailValue} <br>
        <strong>Idade:</strong> ${idade} <br>
        <strong>Telefone:</strong> ${inputPhoneValue}
      </div>
      <button class="delete-button"><img src="./img/icon_lixeira.png" alt="Deletar" class="delete-icon"></button>
    </li>
  `;

  lista.innerHTML += templateHTML;

  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.closest('li').remove();
    });
  });

  nome.value = "";
  email.value = "";
  nascimento.value = "";
  telefone.value = "";
});

function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  let idade = anoAtual - dataNascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();
  if (mesAtual < dataNascimento.getMonth() || (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())) {
    idade--;
  }
  return idade;
}

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
