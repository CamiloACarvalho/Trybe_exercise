// const -> são variáveis que são constantes e não podem ser atribuido outros valores para essa constante
// let -> são variáveis que permitem alteração de seus atributos. Elas recebem os últimos valores

//Tipo primitivo -> são tipos de de variáveis que podemos ter na programação. São elas:
//No java script tem tipagem dinâmica, logo não precisa declarar se é int, float, char...
//Typeof é uma forma de retonar o tipo de variável. Ex:

let valor = 30; //number
let pi = 3.1415; //number
let msg = "hello world"; //string
let boolean = true; //boolean
let nulo = null; //considera objeto null
let ind  //undefined

console.log(typeof valor, typeof pi, typeof msg, typeof boolean, typeof nulo, typeof ind);

//Operações aritmética
//Atribuição =
//Operadores

console.log(2+3); //soma
console.log(4-1); //subtração 
console.log(3*4); //multiplicação
console.log(2**3); //portência
console.log(72/8); //divisão
console.log(5%2); //resto da divisão

//Comparação
//A diferenã entre == e === é: 
//3 == 3 ou 3 == '3' verifica se os valores são iguais. Nesse caso para ambas comparações é true
// 3 === 3 ou 3 === '3' para a primeira comparação é true porque os valores são iguais e os tipos também number e number. Já a segunda comparação é false, porque o valor é igual, mas o tipo é diferente, number e string
// == | === | > | < | >= | <= | !=

