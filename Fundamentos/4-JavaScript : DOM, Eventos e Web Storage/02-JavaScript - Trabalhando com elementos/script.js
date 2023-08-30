function criarHeader() {
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

    //Para removeChild() -> utilizado para remover
}

const criarConteiner = () => {
    //Criar onde será inserida no HTML, em qual posição será criada no HTML
    const main = document.querySelector('main');
    const containerNumeros = document.createElement('div');
    //para adicionar uma classe do css ao atributo do HTML através do JS
    //containerNumeros.className = 'numeros-container'; // Quando tiver várias className pode dar conflito, pois a className pode sobrescrever uma classe sobre a outra. Outra forma de add class é: classList.add('class1','class2'...)
    containerNumeros.classList, add = ('numeros-container');
    main.appendChild(containerNumeros);

}

const gerarNumeroAleatorio = () => {
    return Math.ceil(Math.random() * (60 - 1) + 1);
    // Math.ceil vai arrendondar pra baixo
    // * (max - min) -> o random gera de 0 a 1, por isso multiplica. max é 60 e min é 1
    // Preciso entender o +1
}

const criarNumeros = (quantidade) => {
    const container = document.querySelector('.numeros-container'); // O ponto antes, é para indicar que é uma class
    // Como sabemos que será preciso repetir 6 vezes por causa dos números da mega sena, vamos criar um for para criar 6 elementos
    for (let repeticao = 0; repeticao < quantidade; repeticao += 1) {
        const numero = document.createElement('div');
        numero.classList.add('numero');
        // Criar os números aleatórios para o sorteio
        numero.innerText = gerarNumeroAleatorio(); // Chama a função de gerar númeror aleatório
        // Para criar dentro do HTML, preciso dar um append. Quem é o elemento pai? container. Filho, numero
        container.appendChild(numero);
    }
}

criarHeader();
criarConteiner();
criarNumeros(6);


