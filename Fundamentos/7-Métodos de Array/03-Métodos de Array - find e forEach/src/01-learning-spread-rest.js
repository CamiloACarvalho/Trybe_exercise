/* 
    SPREAD: 
        Permite a expansão de um objeto que seja iterável.
        Principais usos de Spread Operators:
            Concatenar/copiar arrays;
            Fundir objetos;
            Passar arrays como parâmetros.
        ...algumaCoisa
        
    REST PARAMETER:
        Permite a passagem, em um único parâmetro, de um número indefinido de valores. 
        Unifica valores dentro de uma variável que se torna um array;
        ...algumaCoisa
*/

// Exemplo 1
// const array1 = [1, 2, 3];
// const resultado = [...array1];
// array1.push(4);
// console.log(resultado);

// Exemplo 2
// const cinema  = require('../data/data');
// const filmesTops = cinema.gender[1].films;
// const filmesMaisTops = cinema.gender[3].films;
// const filmacos = [...filmesMaisTops, ...filmesTops];
// filmesTops.push({teste: 'teste'});
// console.log(filmacos);

// Exemplo 3
const melhoresDoMundo = ['Messi', 'Ronaldinho', 'Pelé', 'CR7', 'Ney?', 'Marta'];
const [, , thirdPlayer, ...resto] = melhoresDoMundo;
console.log(resto);