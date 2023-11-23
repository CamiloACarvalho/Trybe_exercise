import styles from './form.module.css';

type FormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Form({ handleSubmit }: FormProps) {
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
          <p>Eu gostaria de saber quem é você, me diga, como se chama?</p>
          <input
            id="name"
            type="text"
            placeholder="Maria Silva"
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
          <textarea
            id="textArea"
            rows="7"
            cols="30"
          />
        </div>
        <button type="submit">Continuar</button>
      </form>
      <p>
        Já possui conta?
        {' '}
        <a href="https://betrybe.com">Faça Login</a>
      </p>
    </section>
  );
}

export default Form;