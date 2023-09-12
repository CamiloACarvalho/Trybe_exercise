function gerarNumeroAleatorio () {
    return Math.random() * 150;
};

const resetGame = () => {
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');

    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;

    player1.style.backgroundImage = `url(/files/selectPlayer.png)`;
    player2.style.backgroundImage = `url(/files/selectPlayer.png)`;
};

const scoreUp1 = () => { //somador de pontos
    const scoreUp1 = document.getElementById('p1Score'); //estamos pegando o elemento onde está armazenado o valor 0 no html
    scoreUp1.innerText = parseInt(scoreUp1.innerText) + 1;
};

const scoreUp2 = () => {
    const scoreUp2 = document.querySelector('p2Score'); //estamos pegando o elemento onde está armazenado o valor 0 no html
    scoreUp2.innerText = +scoreUp1.innerText + 1; //Além do parseInt, temos o sinal de + que faz a mesma coisa do que a parseInt
};

const saveScoreLocalStorage = () => {
    // const scoreUp1 = document.getElementById('p1Score');
    // const scoreUp2 = document.querySelector('p2Score'); 
    // //vamos criar uma variável para armazenar as informações. É um local do browser que fica armazenada nessa propriedade
    // //essa propriedade é do java, é só acessar
    // //no localStorage temos duas opções, pega ou guardar a informação dentro do store. setItem imputa o item, getItem pega o item
    // //dentro do parâmentro temos dois parâmentro, chave e valor. ambas são strings
    // //chave: qual o nome que será dado para localstorage
    // //valor: o que deseja armazenar. 
    // localStorage.setItem('scoreP1',scoreUp1.innerText);
    // localStorage.setItem('scoreP2',scoreUp2.innerText);
    //quando tiver que armazenar várias informações dentro de um array, coloque dentro de um for. Neste caso será apenas duas informações
    const arrayScores = [];
    arrayScores.push(scoreUp1.innerText); //precisa ser armazenado como texto
    arrayScores.push(scoreUp2.innerText);
    
    localStorage.setItem('score', JSON.stringify(arrayScores)) //para armazenar um array dentro de um localStore, você tem que converter o item para string, pois o localStorage só armazena strings
    //para armazenar isso em forma de strings, usa-se JSON.stringify
    //guardou na chave score, recupera na chave score
}

//criar uma forma de recuperar a informação dos pontos armazenados no localStorage
const loadScoreLocalStorage = () => {
    const scoreUp1 = document.getElementById('p1Score');
    const scoreUp2 = document.querySelector('p2Score'); 
    // if(localStorage.getItem('scoreP1')){
    //     scoreUp1.innerText = localStorage.getItem('scoreP1');
    // }
    // if(localStorage.getItem('scoreP2')){
    //     scoreUp1.innerText = localStorage.getItem('scoreP1');
    // }
    if(localStorage.getItem('score')){
        const score = JSON.parse(localStorage.getItem('score'));
    scoreUp1.innerText = score[0];
    scoreUp2.innerText = score[1];
    }
};

//Para armazenar várias informações em um único local, armazena em um array. Pensando no projeto Art Pixel, que são 25 blocos, parar armazena-los, armazene-os dentro de um array

const resetLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
}

window.onload = () => {
    //Captura os elementos que vamos usar
    const startBtn = document.getElementById('start-race-btn'); //captura o botão de start
    const resetbtn = document.getElementById('reset-race-btn');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const audioWinner = document.getElementById('audioWinner');

    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;

    loadScoreLocalStorage(); //é aqui que chamamos a propriedade que buscou as informações armazenadas na localStorage

    startBtn.addEventListener('click', () => {
        player1.style.marginLeft = (parseInt(player1.style.marginLeft) + gerarNumeroAleatorio()) + 'px';
        player2.style.marginLeft = (parseInt(player2.style.marginLeft) + gerarNumeroAleatorio()) + 'px';

        const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
        const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

        if (player1Win){
            alert ('PLAYER 1 VENCEU'); //Isso não é usado
            audioWinner.play();
            audioWinner.volume = 0.2;
            scoreUp1();
            saveScoreLocalStorage();
            resetGame();
        }else if (player2Win){
            alert ('PLAYER 2 VENCEU'); 
            audioWinner.play();
            audioWinner.volume = 0.2;
            scoreUp2();
            saveScoreLocalStorage();
            resetGame();
        }
    });

    resetbtn.addEventListener('click', resetGame);

    const containerPlayers = document.querySelectorAll('.car-section')[0];
    containerPlayers.addEventListener('click', (event) => { //o event.target indica o elemento que vc clicar. é uma forma de acessar o elemento que vc clicou
        const selected = document.querySelector('.selected');
        if (selected) {
            selected.classList.remove('selected');
        }
        event.target.classList.add('selected');
    }); 
    //monitora o evento, adiciona um escutador de evento..vai ficar monitorando, caso ocorra algo, ele avisa
    //ele é um parâmetro, e o evento tem que ser passado por aspas. o primeiro é um evento, o segundo é a função que ele vai executar.

    const personagens = document.querySelectorAll('.playersImages');
    for (let personagem of personagens) { //for of. Personagem, vc vai ler de personsagens.
        personagem.addEventListener('click', (event) => {
            const selected = document.querySelector('.selected');
            if (selected){
                selected.style.backgroundImage = `url(${event.target.src})`;
                selected.classList.remove('selected');
            }    
        });
    }

}