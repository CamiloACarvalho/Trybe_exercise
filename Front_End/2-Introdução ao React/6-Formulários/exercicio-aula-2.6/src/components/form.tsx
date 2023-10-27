import InputLabel from './input-label';
import './form.css';

import { CardType } from '../types';

type FormProps = {
  formData: CardType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleFocus: (event: React.FocusEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
};

function Form({ formData, handleChange, handleFocus, handleSubmit }: FormProps) {
  const isFormValid = () => {
    const isCvcValid = formData.cvc.length === 3;

    // Expressões regulares ou Regex
    // https://regex101.com/
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const isNameValid = nameRegex.test(formData.name);

    return isNameValid && isCvcValid;
  };

  return (
    <div className="form__container">
      <h2>Form</h2>
      <form
        onSubmit={ handleSubmit }
      >
        <InputLabel
          name="name"
          value={ formData.name }
          title="Nome"
          onChange={ handleChange }
          onFocus={ handleFocus }
        />

        <InputLabel
          name="number"
          value={ formData.number }
          title="Número do cartão"
          onChange={ handleChange }
          onFocus={ handleFocus }
        />

        <InputLabel
          name="expiry"
          value={ formData.expiry }
          title="Expiração (mm/aa)"
          onChange={ handleChange }
          onFocus={ handleFocus }
        />

        <InputLabel
          name="cvc"
          value={ formData.cvc }
          title="CVC"
          onChange={ handleChange }
          onFocus={ handleFocus }
        />

        <button
          type="submit"
          disabled={ !isFormValid() }
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
