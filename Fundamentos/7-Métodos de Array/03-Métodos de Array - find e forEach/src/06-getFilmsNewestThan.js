
const cinema = require('../data/data');

/* 
    1 - Implemente a função getFilmsNewestThan() que deve receber um gênero e um 
        ano como parâmetro, 
    e então retornar SE TODOS = EVERY os filmes desse genero foram lançados a 
        partir do ano informado: true ou false */

// parte 1: buscar O elemento por genero
// Parte 2 - verificar Se todos os filmes, atendem ao criterio de ano
const getFilmsNewestThan = (generoBusca, anoLancamento) => {
    if (!generoBusca) {
        throw  new Error('Invalid gender');
    }

    if (!anoLancamento) {
        throw new Error('Invalid year');
    }

    if (typeof anoLancamento !== 'number') {
        throw new Error('Year must be a number');
    }

    return cinema.gender
        .find(({ name }) => name === generoBusca)
        .films
        .every(({ year }) => year >= anoLancamento);
}

// console.log(getFilmsNewestThan('Comédia', '2012'));
// Todos os filmes de acao, foram lancados depois de 2012?

module.exports = { getFilmsNewestThan };