window.onload = () => {
    const starBtn = document.getElementById('start-race-btn'); //captura o botão de start
    const resetbtn = document.getElementById('reset-race-btn');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const audioWinner = document.getElementById('audioWinner');

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