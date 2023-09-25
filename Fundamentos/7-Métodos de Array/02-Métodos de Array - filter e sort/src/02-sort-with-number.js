/*  Ordenando um array numérico 
    considerando dois parâmetros a e b, se ela retorna um número negativo (-1), a é menor que b;
    considerando dois parâmetros a e b, se ela retorna um número positivo (1), a é maior que b;
    considerando dois parâmetros a e b, se ela retorna 0, as duas são iguais.
*/

const arrayNumeros = [2, 10, 21, 1];
// a = 10
// b = 2

// const compara = (a, b) => { // a - b = 2 - 10 = -8
//     if (a < b) {
//         return -1; // NAO troca
//     } 

//     return 1; // TROCA
// };

arrayNumeros.sort((a, b) => b - a);
console.log(arrayNumeros);