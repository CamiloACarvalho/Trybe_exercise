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
// 3 == 3 ou 3 == '3' verifica se os valores são iguais. Nesse caso para ambas comparações é true
// 3 === 3 ou 3 === '3' para a primeira comparação é true porque os valores são iguais e os tipos também number e number. Já a segunda comparação é false, porque o valor é igual, mas o tipo é diferente, number e string
// == | === | > | < | >= | <= | !==

//Operadores lógicos -> São ligados a valores boleanos (condições verdadeiras ou falasas)
// && (and) - Todas as condições têm que ser verdadeira
// || (or) - Pelo menos uma das condições tem que ser verdadeiras
// ! (not) - Inverter o valor do resultado booleano. Se é true, a saída é falsa se false, a saída é true

//Estrutura condicional (verifica se a condição é satisfeita)
// IF -> SE
// ELSE IF -> SE NÃO SE
// ELSE -> SE NÃO

let door = false;
let window = false;

if (door === true){
    console.log('A porta está aberta');
} else if (window === true){
    console.log('Feche a janela')
} else{
    console.log('Está tudo fechado')
}

let num1 = (3**3);
let num2 = (3*4);
let num3 = (81**(1/2));
let num4 = (34%5);

if (num1 > num2 && num1 > num3 && num1 > num4){
    console.log(num1, 'é o maior numero')
} else if (num2 > num1 && num2 > num3 && num2 > num4){
    console.log(num2, 'é o maior numero')
} else if (num3 > num1 && num3 > num2 && num3 > num4){
    console.log(num3, 'é o maior numero')
} else{
    console.log(num4, 'é o maior numero')
}

//Swith case é semelhante com o If Else

const mesDoAno = 'Agosto';

switch (mesDoAno){
    case 'Janeiro': //Observe que não usa ponto e vírgula e sim dois pontos
    case 'Fevereiro':
    case 'Março':
        console.log('Verão');
        break; //No break usamos ponto e vírgula
    case 'Abril':
    case 'Maio':
    case 'Junho':
        console.log('Primaveira');
        break;
    case 'Julho':
    case 'Agosto':
    case 'Setembro':
        console.log('Inverno');
        break;
    case 'Outubro':
    case 'Novembro':
    case 'Dezembro':
        console.log('Outono');
        break;
        default: //Default é um else e usamos dois pontos também.
        console.log('Mês invalado'); 
}

// If nomal

let teste = 10;

if (teste > 10){
    let checagem;
    checagem = true;
    console.log(checagem);
}else{
    let checagem;//Seria um else
    checagem = false;
    console.log(checagem);
}


// IF ternário

checagem = teste >10 ? console.log(true) : console.log(false);

//Testando um problema que pensei hoje no trabalho e fazendo uma introdução para a aula de hoje 18/08

let money = [1.23,4.53,0.59,90.32,66.52,3.78,563.23,223.65,9.95];

let fob = 293.89;

let valorDaNf=0;

for (let i =0; i<=8; i++){
    valorDaNf = valorDaNf + money[i];
}

console.log(valorDaNf);

//até aqui ta funcionando heheh. Depois dou continuidade