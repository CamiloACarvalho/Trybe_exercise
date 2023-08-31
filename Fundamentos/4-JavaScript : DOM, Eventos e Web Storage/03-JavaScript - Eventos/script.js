function gerarNumeroAleatorio () {
    return Math.random() * 200;
};

const resetGame = () => {
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');

    player1.style.marginLeft = 0;
    player1.style.marginLeft = 0;

    player1.style.backgroundImage = `url(/files/selectPlayer.png)`;
    player2.style.backgroundImage = `url(/files/selectPlayer.png)`;
};

window.onload = () => {
    const startBtn = document.getElementById('start-race-btn'); //captura o botão de start
    const resetbtn = document.getElementById('reset-race-btn');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const audioWinner = document.getElementById('audioWinner');

    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;

    startBtn.addEventListener('click', () => {
        player1.style.marginLeft = (parseInt(player1.style.marginLeft) + gerarNumeroAleatorio() + 'px');
        player2.style.marginLeft = (parseInt(player2.style.marginLeft) + gerarNumeroAleatorio() + 'px');

        const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
        const player2Win = parseInt(player1.style.marginLeft) > window.innerWidth;

        if (player1Win){
            alert ('PLAYER 1 VENCEU'); //Isso não é usado
            audioWinner.play();
            audioWinner.volume = 0.2;
        }else if (player2Win){
            alert ('PLAYER 2 VENCEU'); 
            audioWinner.play();
            audioWinner.volume = 0.2;
        }

    });

    resetbtn.addEventListener('click', resetGame);

    const containerPlayers = document.querySelectorAll('.car-section')[0];
    containerPlayers.addEventLister('click', (event) => { //o event.target indica o elemento que vc clicar. é uma forma de acessar o elemento que vc clicou
        const selected = document.querySelector('.selected');
        if (selected) {
            selected.classList.remove('.selected');
        }
        event.target.classListladd('.selected');
    }); 
    //monitora o evento, adiciona um escutador de evento..vai ficar monitorando, caso ocorra algo, ele avisa
    //ele é um parâmetro, e o evento tem que ser passado por aspas. o primeiro é um evento, o segundo é a função que ele vai executar.

    const personagens = document.querySelectorAll('playersImages');
    for (let personagem of personagens) { //for of. Personagem, vc vai ler de personsagens.
        personagem.addEventListener('click', (event) => {
            const selected = document.querySelector('.selected');
            if (selected){
                selected.style.backgroundImage = `url(${event.target.src})`;
                selected.classList.remove('.selected');
            }    
        });
    }

}