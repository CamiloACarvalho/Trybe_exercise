import { getPokemonData, createPokemonCard } from './helpers';
import './style.css';

const buttonElement = document.querySelector('#pokemon-button');
const listElement = document.querySelector('#pokemon-list');

function onButtonClick() {
  listElement.innerHTML = '';

  const pokemonList = ['dragonite', 'pikachu', 'ponyta', 'farfetchd'];

  pokemonList.forEach((pokemonName) => {
    getPokemonData(pokemonName)
      .then((pokemon) => {
        const card = createPokemonCard(pokemon);

        listElement.appendChild(card);
      });
  });
}

function onButtonClickWithPromises() {
  listElement.innerHTML = '';

  const pokemonList = ['abra', 'gengar', 'ninetales', 'arcanine'];

  const promisesArray = pokemonList.map((pokemonName) => {
    return getPokemonData(pokemonName);
  });

  Promise.all(promisesArray)
    .then((pokemonResponse) => {
      pokemonResponse.forEach((pokemon) => {
        const card = createPokemonCard(pokemon);
        listElement.appendChild(card);
      });
    })
    .catch((error) => console.log('Deu erro aqui: ', error));
}

buttonElement.addEventListener('click', onButtonClick);

// const a = 10;
// const b = 30;

// let c = a + b; // 40

// setTimeout(() => {
//   c *= c; // 1600
//   console.log(c);
// }, 3000);

// console.log(c);