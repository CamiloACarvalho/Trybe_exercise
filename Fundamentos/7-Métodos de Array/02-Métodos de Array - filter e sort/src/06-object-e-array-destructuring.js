/* Ao fim, ajuste a função getGenderById para que use object destructuring */

const darkKnight = {
    name: 'Bruce Wayne',
    city: 'Gotham',
    superPowers: 'milionario',
    sideKicks: ['Robin', 'BatGirl', 'Alfred'],
};

const { superPowers: sp = 'xablau' } = darkKnight; // DEFAULT = xablau
console.log(sp);

const numeros = [1, 2, 3, 4];
const [firstNumber, secondNumber] = numeros; // SPREAD/ REST ...
console.log(secondNumber);