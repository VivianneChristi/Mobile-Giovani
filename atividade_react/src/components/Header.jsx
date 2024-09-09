import React from 'react';
import vector from '../assets/img/vector.png'; // Importa a imagem do logo
import './header.css'; // Importa o arquivo de estilos CSS

function Header() {
  return (
    <header> {/* Seção principal do cabeçalho */}
      <div className="menu__logo"> {/* Contêiner para o logo e título */}
        <img className="menu__img" src={vector} alt="Logo" /> {/* Imagem do logo */}
        <h3 className="menu__title">Vivianne Christi</h3> {/* Título ao lado do logo */}
      </div>
      <nav> {/* Seção de navegação */}
        <ul className="menu__list"> {/* Lista de itens de navegação */}
          <li className="menu__item"><a href="#sobremim">Sobre mim</a></li> {/* Link para a seção "Sobre mim" */}
          <li className="menu__item"><a href="#skills">Skills</a></li> {/* Link para a seção "Skills" */}
          <li className="menu__item"><a href="#hobbies">Hobbies</a></li> {/* Link para a seção "Hobbies" */}
          <li className="menu__item"><a href="#formacao">Formações e Cursos</a></li> {/* Link para a seção "Formações e Cursos" */}
          <li className="menu__item"><a href="#xp">Experiência</a></li> {/* Link para a seção "Experiência" */}
          <li className="menu__item"><a href="#contato">viviannec.mferreira@gmail.com</a></li> {/* Link para o e-mail */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
