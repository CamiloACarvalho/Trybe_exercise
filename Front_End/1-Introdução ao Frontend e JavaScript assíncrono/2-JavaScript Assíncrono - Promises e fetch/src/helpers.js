export function getPokemonData(pokemonName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Deu erro na requisição');
      });
  }
  
  export function createPokemonCard(pokemon) {
    // criando a div pokemon-card
    const card = document.createElement('div');
    card.className = 'pokemon-card';
  
    // criando o title com o nome do pokémon
    const title = document.createElement('h2');
    title.textContent = pokemon.name;
  
    // criando a imagem do pokémon
    const img = document.createElement('img');
    img.src = pokemon.sprites.other['official-artwork'].front_default;
    img.alt = pokemon.name;
  
    // criando o parágrafo com o tipo do pokémon
    const type = document.createElement('p');
    type.textContent = `Type: ${pokemon.types.map((typeInfo) => typeInfo.type.name)}`;
  
    // adicionando os elemento no card
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(type);
  
    return card;
  }