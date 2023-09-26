/* 
    Ajuste a função getGenderById para que:
    * Ela possa receber mais de um ID para filtrar, retornando as informações de todos os IDs 
*/

const cinema = require('../data/data');

const getGenderById = (idsParametro) => {
    const retornoFilter = cinema.gender.filter(({ id }) => 
        // const { id } = genero;
         idsParametro.includes(id));

    return retornoFilter;
};

console.log(getGenderById([4, 5])); // SPREAD/ REST