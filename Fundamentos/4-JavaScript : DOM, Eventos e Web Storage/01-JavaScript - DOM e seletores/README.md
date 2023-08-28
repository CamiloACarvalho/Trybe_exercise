# Resumo da aula de hoje

Para linkar o JavaScript com HTML, é necessário utilizar o seguinte comando dentro do HTML:
<script> src = 'nome do arquivo.js'</script>
*O script vem antes ou depois do body? Depende! Para carregar todo o HTML para dentro do js, tem que colocar o script no final, mas é possível utilizar no início desde que faça o seguinte acrescende dfender dentro do script.
<script> dfender src = 'nome do arquivo.js'</script>
-> Esse comando diz que só vai carregar o arquivo já se tiver todo o html.

*O document traz todo o arquivo html. Por isso que no ínicio do html, usamos doctype.
*Temos 5 formas de manipular o DOM. 
1) byId
2) byClassName
3) byTagName
4) querySelector
                id #
                class .
5) querySelectorAll
                 id #
                class .

*Não podemos esquecer de escrever Document antes, poque isso indica que vamos acessar o HTML.
*Geralmente atribuimos isso a uma variável, geralmente a uma constante const.
*Dentro da página do html no navegador, cliquei com o botão direito e vá em inspencionar. Lá você consegue verificar o que o DOM está buscando.
*Para buscar a determinada "tag", document.getElementById('referencia da id');
*Quando buscar um elemento que que não exista, ele vai retornar null.
*querySelector é universal, logo você precisa defenir qual busca. Se for por Id = #, se for por class = .
