const sum = (...numeros) => { // Rest = juntar varios valores em um unico local
    let sum = 0;

    // for (let index = 0; index < numeros.length; index+= 1) {
    //     sum += numeros[index];
    // }

    // for (const numero of numeros) {
    //     sum += numero; 
    // }

    numeros.forEach((numero) => sum += numero);    
    return sum;
};

const numerosSoma = [1, 2, 3, 4, 5, 6];
// console.log(sum(numerosSoma[0], numerosSoma[1], numerosSoma[2], numerosSoma[3])); // FEIO 
console.log(sum(...numerosSoma)); // BUNITU Spread = espalhar