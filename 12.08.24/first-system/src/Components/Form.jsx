import "./form.css"
import { useState } from 'react';

const Form = () => {
    // Estado inicial do formulario
    const initilForm ={
        nome: "",

    }
    //Estado do Formulario
    const [formState, setFormState] = useState(initilForm);

    // Função para lidar com a alteração dos campos de entrada
    const handleInput = (event) => {
        //Obter o valor e o nome do campo entrada
        const target = event.currentTarget;
        //extrair o valor e o nome do campo de entrada
        const { name, value } = target;
        //Atualizar o estado do formulario com os novos valores
        setFormState({ ...formState, [name]: value });
    }

    //Função para lidar com submissão do formulário
    const handleSubmit = (event) => {
        //Prevenir o comportamento padrão do formulário 
        event.preventDefault();
        console.log(formState.nome);

        setFormState({...initilForm});
    }


  return (
    <div className="containerForm">
      <div>
        <form onSubmit={handleSubmit} action="">
          <div className="form-control">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Nome" value={formState.nome} onChange={handleInput} />
          </div>
          <div className="form-control">
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form