/* 
    O filter retorna um novo array somente com os elementos que se 
        encaixem no critério de seleção (condição) em que a chamada da função retornou true.
*/

const numeros = [1,2,3,4,5];
// filtra apenas pares
console.log(numeros.filter((elemento) => {
        return elemento % 2 === 0;
    }
));