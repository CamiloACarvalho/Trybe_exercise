const cinema = require('../data/data');

const returnNewObjects = () => {
    return cinema.generos.map((genero) => {
        const id = genero.id;
        const nome = genero.nome;

        return {
            id, // object property shorthand
            nome, // object property shorthand
        }
    });
};

// console.log(cinema.generos);
console.log(returnNewObjects());