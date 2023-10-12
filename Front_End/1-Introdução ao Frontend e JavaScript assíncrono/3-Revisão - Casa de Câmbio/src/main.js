import Swal from 'sweetalert2';
import { renderCurrenciesList } from './pageFunctions';
import './style.css';

// 1 - Pegar o elemento botão e o input
const buttonElement = document.querySelector('.btn-search');
const inputElement = document.querySelector('.input-currency');
const listElement = document.querySelector('.currencies-list');
const titleElemet = document.querySelector('.currencies-title');

// 2 - Adicionar o evento de click
buttonElement.addEventListener('click', (event) => {
  event.preventDefault();
  // https://economia.awesomeapi.com.br/json/daily/CAD/30 *CAD seria dólar canadesse e o 30 é o número de dias que vc quer buscar a informação

  const API_URL = 'https://economia.awesomeapi.com.br/';
  const API_ENDPOINT = `json/daily/${inputElement.value}/30`;

  // 3 - Fazer a requisição para API
  fetch(`${API_URL}${API_ENDPOINT}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      // 5 - Adicionar validação de erro
      throw new Error('Erro ao recuperar cotações');
    })
    .then((currenciesList) => renderCurrenciesList(
      currenciesList,
      listElement,
      titleElemet,
    ))
    .catch(() => Swal.fire({
      title: 'Erro',
      text: 'Não foi possível recuperar as cotações',
      icon: 'error',
    }));
});
