import React from 'react';
import './main.css';
import arrow from '../assets/img/arrow.png'
import profile from '../assets/img/profile.png'

function Main() {
  return (
    <main>
      <section className="title">
        <div className="title__div">
          <div className="title__container" id="sobremim">
            <div className="title__text">
              <h2 className="title__bio">Olá, meu nome é Vivianne Christi e construo páginas web</h2>
              <h3 className="title__subsection">
                Eu sou estudante de Desenvolvimento de Sistemas e atualmente estou cursando o curso de DS na instituição SENAI.
              </h3>
              <ul className="title__network">
                <li className="title__network__item"><a href="https://github.com/VivianneChristi">Github <img src={arrow} alt="Seta" /> </a></li>
                <li className="title__network__item"><a href="https://www.linkedin.com/in/vivianne-christi/">Linkedin <img src={arrow} alt="Seta" /></a></li>
                <li className="title__network__item"><a href="">Instagram <img src={arrow} alt="Seta" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <img className="title__profile" src={profile} alt="Profile" />
      </section>
      
      {/* Outros componentes de seção como About, Skills, Hobbies, Academic, e Experience */}
      
    </main>
  );
}

export default Main;
