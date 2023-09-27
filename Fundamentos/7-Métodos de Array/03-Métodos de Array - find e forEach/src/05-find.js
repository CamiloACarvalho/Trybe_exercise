
/*
    A função find permite que a gente retorne o primeiro elemento que passe no critério (condicao).
    Ou seja, ela retorna APENAS o primeiro elemento em que a chamada da função retornou true.
*/

const arrayValoresAleatorios = [5, 12, 33, 50];
console.log('find:', arrayValoresAleatorios.find((valor) => 
     valor > 5, // IF = true ou false - se nenhum elemento satisfazer a condicao, retorna undefined
));

console.log('filter:', arrayValoresAleatorios.filter((valor) => 
     valor > 5, // IF = true ou false - se nenhum elemento satisfazer a condicao, retorna undefined
));