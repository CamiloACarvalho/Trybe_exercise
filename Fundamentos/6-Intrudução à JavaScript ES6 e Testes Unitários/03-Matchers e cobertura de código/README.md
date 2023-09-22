<h1 align="center">🚀 Guia Avançado de Testes Unitários com Jest</h1>

<p align="center"><i>Aprimorando suas habilidades em testes!</i></p>

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
:gear: Novos Matchers para Casos Específicos

Jest oferece uma variedade de novos matchers para atender a casos específicos. Por exemplo, o matcher toMatch pode ser usado para verificar se uma string corresponde a uma expressão regular:

javascript

test('Verificar se o e-mail possui formato correto', () => {
  expect('meuemail@email.com').toMatch(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
});

:bomb: Testes Unitários nos Fluxos de Exceções

É importante testar como seu código se comporta em situações de exceção. Jest permite testar fluxos de exceção com matchers como toThrow:

javascript

// Função que lança uma exceção
function lançarErro() {
  throw new Error('Opa, algo deu errado!');
}

// Teste unitário usando Jest
test('Lançar um erro', () => {
  expect(lançarErro).toThrow('Opa, algo deu errado!');
});

:chart_with_upwards_trend: Cobertura de Testes

A cobertura de testes é uma métrica que indica a porcentagem do código que é testada. Jest pode gerar relatórios de cobertura para ajudar a identificar áreas não testadas:

bash

jest --coverage

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

Agora, você está pronto para continuar aprimorando seus testes com Jest! :rocket::microscope::white_check_mark:


<p align="center">📚 Este guia foi criado com carinho por [CamiloACarvalho/resumo de jest](https://github.com/CamiloACarvalho/Trybe_exercise).</p>