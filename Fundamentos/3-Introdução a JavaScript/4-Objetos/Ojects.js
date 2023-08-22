const meuArrayNomes = ['Enza', 'Rafael', 'Joi'];
const meuArrayIdades = [25, 31, 17];

// [ ] = sempre que tiver colchetes estamos tratando de array
// { } = sempre que tiver chaves, estaremos tratando de objeto
// JSON = APIs

const person = {
    'nome pessoa': 'Enza', // podemos dar o nome de uma key com espaços, desde que estejam entre ''
    idade: 25, // para atribuir o valor, devemos terminar com ,
};

// Para acessar a key, temos duas opções:
// Por meio de ponto nomeDoObjeto.key

console.log(person.idade);

// Descobri que não quando tem espaço no key, para acessar essa key, não dá pra acessar por ponto
// Acessando por colchetes (menos usado)

console.log(person['idade']);
console.log(person['nome pessoa']);

// Para alterar uma atribuição, basta atribuir o novo valor

person.idade = 30; 

console.log(person.idade);

// Para adicionar novas chaves e valores

person.hobbies = 'Andar de bicicleta';

console.log(person);

// Para adicionar novos hobbies, basta fazer um array

person.hobbies = ['Andar de bicicleta', 'Ver série', 'Ir a praia'];
console.log(person.hobbies);

console.log(person); // Observe que hobbies agora é um array, portanto, dentro de hobbies é possível utilizar os comandos de array

person.hobbies.push('Jogar'); // Push é função de array, addicionar algo ao final do array, para isso, tivemos que entrar no objeto person, acessar o key hobbies (que é um array) e agora aplicar a função push

console.log(person);

// Métodos para Objetos

