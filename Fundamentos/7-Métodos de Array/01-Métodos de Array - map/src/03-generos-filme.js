const cinema = require('../data/data');

const retornoMap = cinema.generos.map((genero) => {
    return genero.nome;
});

console.log(retornoMap);