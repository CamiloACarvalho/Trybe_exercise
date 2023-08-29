# Resumo da aula de hoje

Para linkar o JavaScript com HTML, é necessário utilizar o seguinte comando dentro do HTML:
<script> src = 'nome do arquivo.js'</script>
*O script vem antes ou depois do body? Depende! Para carregar todo o HTML para dentro do js, tem que colocar o script no final, mas é possível utilizar no início desde que faça o seguinte acrescende dfer dentro do script.
<script> dfer src = 'nome do arquivo.js'</script>
-> Esse comando diz que só vai carregar o arquivo já se tiver todo o html.

*O document traz todo o arquivo html. Por isso que no ínicio do html, usamos doctype.
----------------------------------------------
#*Temos 5 formas de manipular o DOM. 
<h2>Retornar apenas um elemento</h2>
1) getElementbyId
2) getElementbyClassName
3) getElementbyTagName
4) querySelector -> só vai te retornar o primeiro elemento, mesmo tendo vários elementos (retorna apenas um valor)
                id #
                class .
-------------------------------------------------
<h2>Retornam mais de um alemento </h2>
5) querySelectorAll -> NodeList = Array -> retornam mais de um valor
                 id #
                class .
6) getElementsbyClassName = HTMLCollection = array, logo para acessar determinado valor vc precisa indiicar o índice, como em um array [0],[1]...[length]
7) getElementsbyTagName = HTMLCollection = array
--------------------------------------------------
*Não podemos esquecer de escrever Document antes, poque isso indica que vamos acessar o HTML.
*Geralmente atribuimos isso a uma variável, geralmente a uma constante const.
*Dentro da página do html no navegador, cliquei com o botão direito e vá em inspencionar. Lá você consegue verificar o que o DOM está buscando.
*Para buscar a determinada "tag", document.getElementById('referencia da id');
*Quando busca id #
                class .r um elemento que que não exista, ele vai retornar null.
*querySelector é universal, logo você precisa defenir qual busca. Se for por Id = #, se for por class = .
---------------------------------------------------
Como setar um texto em um documento HTML? Simples, innerText. Sempre que quiser alterar algo nop HTML, selecionamos o elemento e utilizamos o innerText. Para alterar estilo, utilizamos o style.background. Nesse caso, vamos alterar a cor de fundo.
->cons test = document.querySelector('#name');
test.innerText = 'Camilo';
->Tem também o textContent
->innerHTML vc acrescenta comandos htmls, por exemplo: document.querySelector('#name');
test.innerHTML = <strong>Camilo</strong>;
---------------------------------------------------
Quando precisar manipular o item, utilizar o [] para acessar os indeces dos arrays.
---------------------------------------------------
Math.random() é uma função, por isso precisa dos parênteses.
----------------------------------------------------
Para arrendondar, Math.ceil para baixo, Math.floor para cima, Math.round
----------------------------------------------------
