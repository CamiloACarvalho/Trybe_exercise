# Resumo da Aula - Manipulação do DOM em JavaScript

## Diferença entre Elemento e Nó
- **Elemento**: Funções exclusivas do HTML.
- **Nó**: Engloba tudo dentro do HTML, incluindo comentários, espaços em branco, entre outros.

## Seleção de Elementos
- `firstChild`: Retorna todos os nós do HTML.
- `firstElementChild`: Retorna todos os elementos dentro do HTML, incluindo espaços e comentários.
- `children`: Retorna apenas os elementos filhos.
- `childNodes`: Retorna todos os nós, incluindo espaços e comentários.

## Navegação entre Elementos
- `nextSibling`: Próximo irmão.
- `previousSibling`: Irmão anterior.
- `lastChild`: Último elemento.

## Propriedades de Pais
- `parentNode`: Acessa o nó pai. Considera todos os nós, não apenas elementos.
- `parentElement`: Acessa o elemento pai. Elementos são o escopo do HTML.

## Dicas para o Projeto "Pixel Art"
- Use funções para criar elementos repetidamente, como exemplificado em `criarNumeros`.
- Gere cores RGB aleatórias com três valores, ex: `(num1, num2, num3)`.
- Crie parâmetros para tornar elementos dinâmicos.
- Lembre-se de que propriedades em JavaScript são diferentes das do CSS.
- Utilize o DOM para o projeto "Pixel Art", especialmente para acessar estilos.
- Organize o código com funções específicas para melhor legibilidade.
- Para debug, inspecione elementos no navegador e aprenda a usar as ferramentas de desenvolvimento.





Neste arquivo da aula, está faltando um arquivo CSS. 

// Diferença de elemento para nó:
// Elemento = Apenas funções do HTML
// Nó = todas as coisas que tem dentro do html, comentário, espaço em branco, qlq coisa
// Dentro do HTML temos o elements e os Nods
// Para aplicar essas funções, preciso pegar um elemento
// firstChild é para retornar todos os elementos do html
// firstElementChild todos os elementos dentro do HTML. espaços, comentários...
// só elementos children
// tudo childNodes
// Sibling serve para dizer proximo irmão
// lastChild é o último elemento
// proximo - nextsibling (proximo irmão)
// anterior - previousSibling (irmão anterior)
// parentNode é uma propriedade é para saber quem é o pai. É o teste de DNA. Considera apenas NODE. NODE NÃO É ELEMENTO
// parentElement é para saber quem é o pai do elemento. Todo elemento é um node, mas node NÃO É ELEMENTO. Node é tudo. Elemento são apenas o scoop do HTML

--------------------------------------------------

// Dica para o projeto pixel art =>
// Se precisar criar um elemento repetidamente, criar dentro do for, igual a essa função criarNumeros
// Para criar o RGB aleatório, o rgb é composto por 3 cores, (num1, num2, num3)
// Se precisar deixar dinâmico, precisa criar parâmetro
// Propriedade em JS é diferente do CSS, não tem - 
// Utilizar o DOM para o projeto Pixel Art. Até por motivos de acessar stiles.
// Criar funções dentro deste projeto para organizar o código
// Ver o erro através do navegador. Botão direito, inspencionar (aprender melhor isso)
// É possível debugar pelo navegador que abriu o código HTML, CSS e JS

