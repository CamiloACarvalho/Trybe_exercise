/*  Ordenando um array numérico 
    considerando dois parâmetros a e b, se ela retorna um número negativo (-1), a é menor que b;
    considerando dois parâmetros a e b, se ela retorna um número positivo (1), a é maior que b;
    considerando dois parâmetros a e b, se ela retorna 0, as duas são iguais.
    negativo (-1) = não troca
    positivo (1)  = troca
    
*/

const arrayNumeros = [2, 10, 21, 1];

const compare = (a, b) => { // a = 10 e b = 2
    if (a < b) { // 10 2
        return 1; // NAO TROCA
    } else {
        return -1; // TROCA
    }
}
arrayNumeros.sort((a, b) => a - b);


console.log(arrayNumeros);