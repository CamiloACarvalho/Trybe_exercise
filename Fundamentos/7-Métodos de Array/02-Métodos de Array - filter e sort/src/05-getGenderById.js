
/* Informe um ID por parametro e retorne as informações do genero deste ID */
const cinema = require('../data/data');

const getGenderById = (idParametro) => cinema.gender.filter((genero) => genero.id === idParametro);

console.log(getGenderById(3));