document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o formulário e a lista onde os usuários serão adicionados
  const form = document.getElementById('user-form');
  const lista = document.querySelector('.lista');
  const telefoneInput = document.getElementById('telefone');

  // Adiciona um ouvinte de evento para o envio do formulário
  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Previne o comportamento padrão de envio do formulário

      // Obtém os valores dos campos do formulário
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const idade = document.getElementById('idade').value;
      const telefone = telefoneInput.value;

      // Valida se todos os campos estão preenchidos
      if (!nome || !email || !idade || !telefone) {
          alert('Por favor, preencha todos os campos corretamente.');
          return;
      }

      // Cria um novo item de usuário com os valores fornecidos
      const userItem = document.createElement('li');
      userItem.innerHTML = `
          <div>
              <strong>Nome:</strong> ${nome} <br>
              <strong>Email:</strong> ${email} <br>
              <strong>Idade:</strong> ${idade} <br>
              <strong>Telefone:</strong> ${telefone}
          </div>
          <button class="delete-button">
              <img src="./img/icon_lixeira.png" alt="Deletar" class="delete-icon">
          </button>
      `;
      
      // Adiciona o novo item à lista
      lista.appendChild(userItem);

      // Adiciona um ouvinte de evento ao botão de deletar
      userItem.querySelector('.delete-button').addEventListener('click', () => {
          userItem.remove(); // Remove o item da lista
      });

      // Limpa os campos do formulário após a submissão
      form.reset();
  });

  // Adiciona um ouvinte de evento para formatar o número de telefone enquanto o usuário digita
  telefoneInput.addEventListener('input', (e) => {
      let valor = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

      // Formata o número de telefone conforme o comprimento do valor
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
