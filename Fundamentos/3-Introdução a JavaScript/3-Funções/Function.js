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

