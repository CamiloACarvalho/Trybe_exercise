//Função é uma palavra reservada que vai armazenar alguns comandos dentro da caixinha
//Para criar uma função, vai precisar da palavra reservada (function), o nome função (boasVindas), parâmetro (), abre e fecha chaves

function boaVindas (){ 
    console.log(`Olá, seja bem vindo`); //Quando se cria uma função, tudo que está dentro da função (scoopo) existe apenas dentro do scoopo. para ter acesso, você precisa chamar a função
}

//Chamando a função
boaVindas();

//As funções te retornam algo. Sempre que precisar retornar algo, utiliza return.
//Se eu trocar o console.log dentro da função por retourn, ele vai devolver a msg, mas não vamos visualizar, pois não colocamos o console.log
//O parâmentro serve para adicionar um "parâmentro a função"

function boasVindas (nomePessoa){ 
    return `Olá ${nomePessoa}, seja bem vindo(a)`;
}

//Chamando a função passando o parâmetro e exibindo a msg através do console.log
console.log(boasVindas('Camilo'));
console.log(boasVindas('Geizianne'));
console.log(boasVindas('Enza'));
console.log(boasVindas('World'));

//Veja que uma função serviu para dar boas vindas a diversas pessoas

//Criando ARROW FUNCTION
//1) Não utiliza function, vc passa a criar uma variável constante, logo sempre começa por const
//2) O nome da Arrow
//3) O símbolo de =
//4) O parâmetro
//5) Arrow => setas
//6) A caixa da função/arrow {}
//7) Criar um return se necessário

const boasVindas = (nomePessoa) => {
    return `Olá ${nomePessoa}, seja bem vindo(a)`;
}

//Chamando a arrow function
console.log(boasVindas('Camilo'));
console.log(boasVindas('Geizianne'));
console.log(boasVindas('Enza'));
console.log(boasVindas('World'));

//A ideia de usar o arrow é deixar o código mais simples e limpo

//PARA O MEU CÓDIGO EM JAVA QUE CRIEI UMA CALCULADORA CIENTÍFICA, 
//UTILIZAR A FUNÇÃO. POIS QUANDO DIGITAR +, POSSO CHAMAR A FUNÇÃO SOMA, 
//E COLOCAR O '+' COMO PARÂMETRO. PENSAR NISSO COM CARINHO

//Exemplo de como fazer a calculadora

const somar = (valor1,valor2) => {
    if (typeof valor1 === 'number' && typeof valor2 ==='number'){
        return valor1+valor2;
    }else{
        return `Informe um valor válido!`;
    }
}

console.log(somar(2.43,4));

//Por boas práticas o ideial é ter no máximo 5 parâmetros