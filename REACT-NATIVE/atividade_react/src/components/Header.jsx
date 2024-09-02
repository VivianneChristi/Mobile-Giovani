import React from 'react';
import vector from '../assets/img/vector.png'
import './header.css';

function Header() {
  return (
    <header>
      <div className="menu__logo">
        <img className="menu__img" src={ vector } alt="Logo" />
        <h3 className="menu__title">Vivianne Christi</h3>
      </div>
      <nav>
        <ul className="menu__list">
          <li className="menu__item"><a href="#sobremim">Sobre mim</a></li>
          <li className="menu__item"><a href="#skills">Skills</a></li>
          <li className="menu__item"><a href="#hobbies">Hobbies</a></li>
          <li className="menu__item"><a href="#formacao">Formações e Cursos</a></li>
          <li className="menu__item"><a href="#xp">Experiência</a></li>
          <li className="menu__item"><a href="#contato">viviannec.mferreira@gmail.com</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
