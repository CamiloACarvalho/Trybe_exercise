/* HOF = é uma funcao que recebe outra funcao como parametro
    const executeIsso = () => {}
    button.addEventListener('click', executeIsso)
    button.addEventListener('click', () => {})
    addEventListener = HOF = recebe outra funcao no parametro
    executeIsso = callback = é a funcao que está sendo passada no parametro
*/ 

const meuArray = [1, 2, 3, 4];
// array.hof(callback) ou array.hof( () => { })

/* 
    map():
    - RETORNA um array
        -  MESMA quantidade de elementos do array que chamou a HOF
    - Transformação!!!
*/

const pessoasTime36 = [
    {
        nome: 'Enza Rafaela',
        funcao: 'Pessoa Especialista',
        anoAdmissao: 2022,
    },
    {
        nome: 'Carolzita',
        funcao: 'Pessoa Especialista',
        anoAdmissao: 2020,
    },
    {
        nome: 'Joi',
        funcao: 'Pessoa Instrutora',
        anoAdmissao: 2021,
    }
];

// for (let index = 0; index < pessoasTime36.length; index += 1) {
//     console.log(pessoasTime36[index].nome);
// }

const retornoMap = pessoasTime36.map((elemento) => {
    return `${elemento.nome} - ${elemento.anoAdmissao}`; 
});

console.log(retornoMap);