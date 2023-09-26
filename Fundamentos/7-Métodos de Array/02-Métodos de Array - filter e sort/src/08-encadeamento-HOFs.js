/* 
    Ajuste a função getGenderById para que:
    * Retorne apenas nome dos generos 
    * Ordenado em ordem alfabética
*/

const cinema = require('../data/data');

const getGenderById = (idsParametro) => cinema.gender
    .filter(({ id }) => idsParametro.includes(id))
    .map((elemento) => elemento.name)
    .sort(); // ENCADEAMENTO DE HOFS

console.log(getGenderById([4, 5])); // SPREAD/ REST