const cinema = require('../data/data');

// idsPesquisa passa ser um array
// REST parameter = pois irei receber VARIOS valores em uma unica variavel
const getGenderById = (...idsPesquisa) => cinema.gender
    .filter(({ id }) => idsPesquisa.includes(id));

console.log(getGenderById(1, 2, 3));