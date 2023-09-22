<h1 align="center">🚀 Guia de Testes Unitários com Jest</h1>

<p align="center"><i>A arte de testar e desenvolver com confiança!</i></p>

---

## :white_check_mark: Por que Testar Seu Código é Crucial?

Testar o código é fundamental para garantir que ele funcione como esperado e para evitar problemas futuros. É como construir uma casa - antes de morar nela, você verifica se tudo está funcionando corretamente, como a eletricidade, a água e as fechaduras das portas. Da mesma forma, testar o código é como fazer um "check-up" para garantir que ele esteja livre de erros.

## :microscope: Testes Unitários com Jest

[Jest](https://jestjs.io/) é uma ferramenta popular para escrever e executar testes unitários em JavaScript. Testes unitários focam em partes específicas do seu código, como funções ou métodos, isoladamente. Eles verificam se essas partes funcionam conforme o esperado. Aqui está um exemplo simples usando Jest:

```javascript
// Função que soma dois números
function somar(a, b) {
  return a + b;
}

// Teste unitário usando Jest
test('Somar 2 e 3 deve ser igual a 5', () => {
  expect(somar(2, 3)).toBe(5);
});

:construction: Desenvolvimento Orientado a Testes (TDD)

O Desenvolvimento Orientado a Testes (TDD) é uma abordagem onde você escreve testes antes mesmo de escrever o código que está testando. O ciclo TDD é composto por:

    Escreva um teste: Comece criando um teste que descreva o comportamento desejado da funcionalidade que você deseja implementar.

    Faça o teste passar: Escreva o código mínimo para que o teste seja bem-sucedido. Seu objetivo é fazer o teste passar, não necessariamente escrever o código mais complexo de primeira.

    Refatore (se necessário): Depois que o teste passar, você pode refatorar o código para torná-lo mais eficiente ou legível, mas sempre garantindo que o teste continue passando.

O TDD ajuda a criar código mais robusto e a documentar claramente o comportamento esperado do seu software desde o início.
:gear: Instalação do Jest e Comando no Ubuntu

Para começar no Ubuntu:

    Certifique-se de ter o Node.js instalado.

    Crie ou navegue até o projeto.

    Instale o Jest globalmente:

    bash

npm install -g jest

Execute os testes no diretório do projeto:

bash

    jest

:white_check_mark: Principais Matchers do Jest

    toBe: Verifica igualdade estrita.
    toEqual: Verifica igualdade profunda (para objetos).
    toBeTruthy e toBeFalsy: Verifica se é verdadeiro ou falso.

Exemplo:

javascript

expect(2 + 2).toBe(4);
expect({ nome: 'João' }).toEqual({ nome: 'João' });
expect(isEven(4)).toBeTruthy();
expect(isEven(3)).toBeFalsy();

:file_folder: Organização com Blocos describe

Use blocos describe para organizar seus testes:

javascript

describe('Operações Matemáticas', () => {
  test('Soma de 2 e 3', () => {
    expect(2 + 3).toBe(5);
  });

  test('Multiplicação de 4 e 6', () => {
    expect(4 * 6).toBe(24);
  });
});

Agora, você está pronto para começar a escrever testes unitários com Jest! :rocket::microscope::white_check_mark:

<p align="center">📚 Este guia foi criado com carinho por [CamiloACarvalho/resumo de jest](https://github.com/CamiloACarvalho/Trybe_exercise).</p>
```
