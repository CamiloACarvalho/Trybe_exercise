const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const tabuada = (fatorMultiplicacao) => {
    // const resultado = [];
    // for (let index = 0; index < numeros.length; index+= 1) {
    //     resultado.push(numeros[index] * fatorMultiplicacao)        
    // }
    // return resultado;

    return numeros.map((numero) => numero * fatorMultiplicacao);
    // SE RETIRAR RETURN TAMBEM RETIRE AS CHAVES {}
}

console.log(tabuada(3));
console.log(tabuada(5));