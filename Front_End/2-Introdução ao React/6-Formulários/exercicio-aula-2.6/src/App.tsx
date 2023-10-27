import { useState } from 'react';
import Card from 'react-credit-cards-2';

import { CardType } from './types';
import Form from './components/form';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    expiry: '',
    cvc: '',
  });
  const [focused, setFocused] = useState('');
  const [cardList, setCardList] = useState<CardType[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(event.target.name);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCardList([...cardList, formData]);
    setFormData({
      name: '',
      number: '',
      expiry: '',
      cvc: '',
    });
  };

  return (
    <div className="App">
      <h1>Credit Card</h1>

      <Card
        name={ formData.name }
        number={ formData.number }
        expiry={ formData.expiry }
        cvc={ formData.cvc }
        focused={ focused }
      />

      <Form
        formData={ formData }
        handleChange={ handleChange }
        handleFocus={ handleFocus }
        handleSubmit={ handleSubmit }
      />

      <div>
        <h2>Lista de cartões</h2>
        { cardList.map((card) => (
          <Card
            key={ card.number }
            name={ card.name }
            number={ card.number }
            expiry={ card.expiry }
            cvc={ card.cvc }
          />
        )) }
      </div>

    </div>
  );
}

export default App;
