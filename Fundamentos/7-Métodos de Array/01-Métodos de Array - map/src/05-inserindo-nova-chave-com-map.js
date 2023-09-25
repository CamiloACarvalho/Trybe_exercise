const cinema = require('../data/data');

const returnNewObjects = (nameProperty, valueProperty) => {
    return cinema.generos.map((genero) => {
        const id = genero.id;
        const nome = genero.nome;

        return {
            id, // object property shorthand
            nome, // object property shorthand
            [nameProperty]: valueProperty
        }
    });
};

// console.log(cinema.generos);
console.log(returnNewObjects('legenda', 'pt-br'));