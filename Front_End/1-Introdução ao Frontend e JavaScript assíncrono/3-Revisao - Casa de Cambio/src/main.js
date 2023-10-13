// 1 - pegar o elemento botão e o input - OK
// 2 - adicionar o evento de click - OK
// 3 - fazer a requisição pra API - OK
// 4 - renderizar os dados na tela - OK
// 5 - adicionar validação de erro - OK

import Swal from 'sweetalert2';
import { renderCurrenciesList } from './helpers';

import './style.css';

const buttonElement = document.querySelector('.btn-search');
const inputElement = document.querySelector('.input-currency');
const listElement = document.querySelector('.currencies-list');
const titleElement = document.querySelector('.currencies-title');

buttonElement.addEventListener('click', (e) => {
  e.preventDefault();
  const API_URL = 'https://economia.awesomeapi.com.br/';
  const API_ENDPOINT = `json/daily/${inputElement.value}/30`;

  fetch(`${API_URL}${API_ENDPOINT}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Erro ao recuperar cotações');
    })
    .then((currenciesList) => renderCurrenciesList(
      currenciesList,
      listElement,
      titleElement,
    ))
    .catch(() => Swal.fire({
      title: 'Erro',
      text: 'Não foi possível recuperar as cotações',
      icon: 'error',
    }));
});
