import React, { useState } from 'react';
import contact from '../assets/img/contact_image.png'; // Importa a imagem para o formulário
import './form.css'; // Importa o arquivo de estilos CSS

function Form() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target; // Obtém o nome e o valor do campo alterado
    setFormData({ ...formData, [name]: value }); // Atualiza o estado com o novo valor
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    console.log(formData); // Exibe os dados do formulário no console
  };

  return (
    <section className="formcontato"> {/* Seção principal do formulário */}
      <div id="contato" className="formcontato__contacto"> {/* Contêiner do formulário e imagem */}
        <div className="formcontato--esquerda"> {/* Contêiner para a imagem */}
          <img className="formcontato__img" src={contact} alt="Contato" /> {/* Imagem de contato */}
        </div>
        <div className="formcontato__text"> {/* Contêiner para o texto e formulário */}
          <h2 className="formcontato__title">Contato</h2> {/* Título principal */}
          <h3 className="formcontato__subtext">Quer entrar em contato comigo?</h3> {/* Subtítulo */}
          <h3 className="formcontato__subtext">
            Preencha o formulário ao lado e entrarei em contato o mais rápido possível.
          </h3> {/* Instrução para preencher o formulário */}
          <form className="formcontato__form" onSubmit={handleSubmit}> {/* Formulário com manipulador de envio */}
            <input
              className="formcontato__input"
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              className="formcontato__input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="formcontato__input"
              type="text"
              name="assunto"
              placeholder="Assunto"
              value={formData.assunto}
              onChange={handleChange}
            />
            <textarea
              className="formcontato__textarea"
              name="mensagem"
              placeholder="Sua mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows="5"
              cols="40"
            />
            <button className="formcontato__botao" type="submit">Enviar mensagem</button> {/* Botão para enviar o formulário */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
