import { useState } from 'react';
import styles from './form.module.css';

type FormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Form({ handleSubmit }: FormProps) {
  const [validation, setValidation] = useState<boolean>(true);

  const handleCheck = () => {
    setValidation((prevValidation) => !prevValidation);
  };

  return (
    <section className={ styles.container }>
      <form
        onSubmit={ handleSubmit }
        className={ styles.formContainer }
      >
        <header>
          <h1 className={ styles.title }>Olá, seja bem vindo 😃</h1>
        </header>
        <div className={ styles.inputContainer }>
          <p>Me diga seu nome ou como gostaria de ser chamado(a)?</p>
          <input
            id="name"
            type="text"
            placeholder="Digite seu nome"
            className={ styles.inputText }
          />
        </div>
        <div className={ styles.inputContainer }>
          <p>Com o que você trabalha?</p>
          <select>
            <option value="Estudante">Estudante</option>
            <option value="Desenvolvedor">Desenvolvedor</option>
            <option value="Outra profissão">Outra profissão</option>
            <option value="Recrutador">Recrutador</option>
          </select>
        </div>
        <div className={ styles.textArea }>
          <p>
            O que gostaria de compartilhar?
            Alguma sugestão, elogio, fique a vontade 🙃
          </p>
          <textarea
            id="textArea"
            rows={ 7 }
            cols={ 30 }
          />
        </div>
        <input
          type="checkbox"
          id="validation"
          checked={ validation } // Atualizado para usar o estado
          onChange={ handleCheck } // Atualizado para chamar a função de manipulação
        />
        <label
          htmlFor="validation"
          className={ styles.validate }
        >
          ⚠️ Suas informações não serão divulgadas!
          O intuíto é apenas conhecer o público com a finalidade
          de gerar contúdos mais direcionados 🙂
        </label>
        <button
          type="submit"
          disabled={ !validation }
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Form;
