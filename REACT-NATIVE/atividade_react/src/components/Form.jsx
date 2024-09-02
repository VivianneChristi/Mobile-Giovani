import React, { useState } from 'react';
import contact  from '../assets/img/contact_image.png';
import './form.css';

function Form() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="formcontato">
      <div id="contato" className="formcontato__contacto">
        <div className="formcontato--esquerda">
          <img className="formcontato__img" src={contact} alt="Contato" />
        </div>
        <div className="formcontato__text">
          <h2 className="formcontato__title">Contato</h2>
          <h3 className="formcontato__subtext">Quer entrar em contato comigo?</h3>
          <h3 className="formcontato__subtext">
            Preencha o formulário ao lado e entrarei em contato o mais rápido possível.
          </h3>
          <form className="formcontato__form" onSubmit={handleSubmit}>
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
            <button className="formcontato__botao" type="submit">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
