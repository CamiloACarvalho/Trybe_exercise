/*  
    Como poderíamos ordenar o array de generos por descrição, ao invés de id? 
    
    Lembre-se que: para a SORT movimentar a posição dos elementos, 
        ela se baseia nos retornos:
            negativo (-1) = não troca
            positivo (1)  = troca
            ou 0 = não troca (iguais)
*/

const cinema = require('../data/data');

console.log(cinema.gender.sort((a, b) => {
    if (a.name > b.name) { // a = comedia e b = acao = true
        return 1; // TROCA
    }

    return -1; // NAO TROCA

    // return a.name.localeCompare(b.name); // CASO tenha caracteres especiais
})); 

// Carol > Enza = true = pois 'c' vem antes do 'e'