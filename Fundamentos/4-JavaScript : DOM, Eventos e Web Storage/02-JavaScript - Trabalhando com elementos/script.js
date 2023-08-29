function criarHeader () {
    // Criar Elementos para o Header

//Para adicionar um elemento em algum ponto do HTML
const header = document.getElementsByTagName('header')[0]; // Vai procurar em todos os elementos que tenham a tag 'header' e armazenar na conts. 
// Ela retornar uma HTMLColletion.
// Quando trata HTMLColletion vem uma lista, para torna-lo elemento, precisa colocar [index]

// 💭 Para criar um elemento utiliza o CreatElement
const title = document.createElement('h1'); // Para criar um determinado elemento, coloca dentro da aspas. Ex: 'div', 'h1'...

// 💭 Para alterar as propriedade do elemento criado?
title.innerText = 'Boas Vindas - Bora Jogar na Mega?';

// 💭Como colocar o elemento criado no DOM?
// pai.appendChild(elementoCriado) -> Para adicionar o elemento dentro do DOM. 
// Quem é o pai? Qual a variável que armazena o title? header (a variável criada que armazenou o header)
header.appendChild(title); 
// 1) criar a posição onde será criado, neste caso header
// 2) Criar o elemento que será add
// 3) Adcione através do append
// 4) posição de onde será criado.appendChild(variável que gerará a mudança)

const text = document.createElement('p') // Criei um parágrafo
text.innerText = 'Números sorteados:';
header.appendChild(text);
}

criarHeader();