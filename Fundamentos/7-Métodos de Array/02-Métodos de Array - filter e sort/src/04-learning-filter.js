/* 
    O filter retorna um novo array somente com os elementos que se 
        encaixem no critério de seleção (condição) em que a chamada da função retornou true.
*/

const arrayNumeros = [1, 2, 3, 4, 5];
const retornoFilter = arrayNumeros.filter((numero) => numero % 2 === 0);

// const arrayPares = [];
// for (let index = 0; index < arrayNumeros.length; index+=1) {
//     if (arrayNumeros[index] % 2 === 0) {
//         arrayPares.push(arrayNumeros[index]);
//     }
// }

console.log(retornoFilter);
console.log(arrayPares);