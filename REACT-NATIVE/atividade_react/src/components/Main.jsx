import React from 'react';
import './main.css'; // Importa o arquivo de estilos CSS
import arrow from '../assets/img/arrow.png'; // Importa a imagem da seta
import profile from '../assets/img/profile.png'; // Importa a imagem de perfil

function Main() {
  return (
    <main>
      <section className="title"> {/* Seção principal de título */}
        <div className="title__div"> {/* Div contêiner para centralizar o conteúdo */}
          <div className="title__container" id="sobremim"> {/* Contêiner do título */}
            <div className="title__text"> {/* Contêiner para o texto */}
              <h2 className="title__bio">Olá, meu nome é Vivianne Christi e construo páginas web</h2> {/* Título principal */}
              <h3 className="title__subsection">
                Eu sou estudante de Desenvolvimento de Sistemas e atualmente estou cursando o curso de DS na instituição SENAI.
              </h3> {/* Subtítulo com informações adicionais */}
              <ul className="title__network"> {/* Lista de links para redes sociais */}
                <li className="title__network__item">
                  <a href="https://github.com/VivianneChristi">Github <img src={arrow} alt="Seta" /> </a> {/* Link para o Github com ícone de seta */}
                </li>
                <li className="title__network__item">
                  <a href="https://www.linkedin.com/in/vivianne-christi/">Linkedin <img src={arrow} alt="Seta" /></a> {/* Link para o Linkedin com ícone de seta */}
                </li>
                <li className="title__network__item">
                  <a href="">Instagram <img src={arrow} alt="Seta" /></a> {/* Link para o Instagram com ícone de seta (URL não definida) */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img className="title__profile" src={profile} alt="Profile" /> {/* Imagem de perfil */}
      </section>
      
      {/* Outros componentes de seção como About, Skills, Hobbies, Academic, e Experience */}
      
    </main>
  );
}

export default Main;
