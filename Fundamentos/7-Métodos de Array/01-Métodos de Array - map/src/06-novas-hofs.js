const cinema = require('../data/data');

const checkGenero = (generoFiltro) => {
    return cinema.generos.map( (genero) => genero.nome)
        .every((elemento) => elemento === generoFiltro); // ENCADEAMENTO de HOFs
}

// console.log(retornoMap.includes('Terror'));
// SOME = ALGUM e EVERY = TODOS = CONDICOES = retornam BOOLEANOS

// console.log(checkGenero('Terror'));

console.log(cinema.generos.map( (genero) => genero.filmes
    .map((filme) => filme.nome))); // ANINHAMENTO de HOFs