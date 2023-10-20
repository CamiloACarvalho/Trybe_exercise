## Projeto React com TypeScript usando Vite - Checklist

📋 **Checklist**

**Passo 1:** Configuração Inicial
- ✔️ **1. Crie um projeto React com TS usando Vite** – `npm create vite@latest`.
  - 1.1 Project name: 'nome do projeto'
  - 1.2 Select a framework: 'no momento REACT'
  - 1.3 Select a variant: 'TypeScript ou TypeScript + SWC'

  *Observação*: Ao dar instalar o VITE, ele já gera uma pasta com o nome do projeto com vários arquivos úteis, logo não precisa criar uma pasta, já pode abrir o terminal e rodar o comando.

**Passo 2:** Instalação de Dependências
- ✔️ **2. Entre na pasta do projeto, instale as dependências e, depois, instale o eslint da Trybe** – `npm install @trybe/eslint-config-frontend`.
  - 2.1 `cd 'nome da pasta'`
  - 2.2 `npm install` (instala as dependências do node)
  - 2.3 Abra o arquivo '.gitignore' e escreva `node_modules/` (nesse arquivo você escreve o nome de todos os arquivos que você não queira fazer o upload para o repositório, o git irá ignorar)
  - 2.4 Abra o arquivo 'package.json' e no objeto "scripts" escreva o value `dev: "vite --open"` (dentro de script você escreve o comando que vc quer digitar e o que ele vai realizar. Neste caso `npm run dev` vai abrir o VITE)

**Passo 3:** Configuração do ESLint
- ✔️ **3. Crie o arquivo .eslintrc.json e faça o extends para @trybe/eslint-config-frontend/typescript**.
  - 3.1 Como o VITE já vem com o ESLint, precisamos remover, para remover, `rm.eslintrc.cjs`
  - 3.2 Remova as dependências que foram instaladas pelo VITE - `npm remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint-plugin-react-refresh`
  - 3.3 Instale o pacote de regras de lint (existe várias regras, inclusive é possível criar as próprias regas, mas por hora, vamos usar as regras da Trybe) - `npm install @trybe/eslint-config-frontend -D`
  - 3.4 Criar o arquivo .eslintrc.json na raiz do projeto - `touch .eslintrc.json`
  - 3.5 Abra o arquivo '.eslintrc.json' e digite:
    ```json
    {
        "extends": "@trybe/eslint-config-frontend/typescript"
    }
    ```
  - 3.6 para rodar o ESLint agora basta digitar o comando - `npm run lint`
  - 3.7 Crie um arquivo de configuração do VSCode `settings.json` na raiz do projeto usando o seguinte comando: - `touch .vscode/settings.json`
  - 3.8 Abra o arquivo `settings.json` e configure-o desta forma:
    ```json
    {
        "editor.formatOnSave": true,
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
            "source.fixAll.stylelint": true
        },
        "extensions.ignoreRecommendations": false
    }
    ```
  - 3.9 Execute o comando - `npm run lint` e faça as correções necessárias
    - 3.9.1 Rode o comando - `npm run lint -- --fix` para corrigir boa parte dos erros
    - 3.9.2 No arquivo App.tsx 'count' é o erro, pois é uma variável que é declarada como estado, só alterar para prevCount

**Passo 4:** Iniciando o Projeto
- ✔️ **4. Inicie o projeto e veja se está tudo funcionando**.
  - Como sugestão, você pode deletar todo o conteúdo que não é necessário do arquivo App.tsx e deixar apenas o `return` do componente com algo como `<div>Work in progress</div>`.
  - 4.1 Os únicos comandos que vão ficar dentro de do arquivo `App.tsx` são:
  ```tsx
  import './App.css';
    function App() {
      return (
        <>
          <div>Work in progress</div>
          <h1>Desenvolvimento Web</h1>
        </>
    );
  }
  export default App;
  ```

**Passo 5:** Componente Title
- ✔️ **5. Crie um componente chamado Title que exiba o título `<h1>Desenvolvimento Web</h1>` na tela.**
  - 5.1 É de boa prática criar uma pasta de componentes dentro da pasta src. Para isso, vamo acessar a pasta src `cd src`, e depois `mkdir components`
  - 5.2 Criar um arquivo onde será criado o código do componente. Por padrão costuma-se iniciar o nome com letra maiúscula o nome do arquivo. Neste exemplo: `touch Desenvolvimento-Web.tsx`. '.tsx' porque é um arquivo TipeScript com elemento de React.
  - 5.3 Abra o arquivo do componente criado e elabore o código. 
    - 5.3.1 O que precisa escrever para ser um componente REACT? O mais básico é uma função.
    - 5.3.2 Essa função precisa retornar `return`uma componente `JSX`.
    - 5.3.3 Como criou a função é necessário exportá-la, para isso `export default DesenvolvimentoWeb`
    **Obs: O nome do componente TEM que usar a primeira letra maiúscula.** É uma forma de diferenciar uma `tag` (letra minúscula) de um `componente` (letra maiúscula). 
    - 5.3.4 Componente constuma ter apenas uma função. O componente é responsável por uma única coisa, caso esteja ralizando mais de uma coisa, é de boa pratica criar mais componentes para atribuir cada coisa a um compoente.
  - 5.4 E para finalizar, volte ao arquivo `App.tsx` e 'traga' o componente criado. O componente criado deve vir entre tags `<>`, `< DesenvolvimentoWeb >`.

**Passo 6:** Componente ModuleDetails
- ✔️ **6. Crie um componente chamado ModuleDetails que exiba o nome dos módulos deste curso.**
  - 6.1 Repita os passo do tópico anterior. Dentro da pasta `components`, cria um aquivo com o nome do componente. Dentro desse arquivo crie uma função e exporte-o.
  - 6.2 Criei uma lista com os nomes dos módulos oferecidos pela *Trybe*.

**Passo 7:** Componente HelloWorld
- ✔️ **7. Crie um componente chamado HelloWorld que importa e renderiza os componentes criados anteriormente.**
  - 7.1 Vou criar um arquivo com o nome `HelloWorld.tsx` dentro da pasta `components`. 
  - 7.2 Vou importar as informações criadas no compoente anterior `ModuleDetails.tsx` utilizando o seguinte comando: `import ModuleDetails from "./ModuleDetails";`
  - 7.3 Vou criar uma nova função dentro do arquivo do atual que receber a lista dos módulos feita anteriormente.
  - 7.4 Vou exporta-la `export default HelloWord;`

**Passo 8:** Renderização do HelloWorld
- ✔️ **8. Renderize o componente HelloWorld no componente App.**
 - 8.1 Como tudo está pronto, vou apenas 'chamar' ou 'receber' o *componente* de `HelloWorld.tsx`.

**Passo 9:** Cálculo de Idade
-  **9. No componente HelloWorld, crie uma função que calcule a idade do usuário a partir da data de nascimento e a exiba na tela. Dica: você poderá pegar essa fórmula pronta da internet ou do repositório da aula ao vivo.**
  - 9.1 Tive que criar um outro arquivo, pois não queria apagar os arquivos em HelloWorld. O novo componente `CalculateAge.ts`
  - 9.2 Criei uma função e separei as informções atrvés do comando `.split('/')`. Os valores serão armazenados em um array separados por dia, mes e ano
  - 9.3 Criar uma variável para receber a data atual através do `new Date()`. New date retornar um objeto como as informações
    **OBS:**
    - 9.3.1 year retornar os dois últimos dígitos, para retornar o ano 'cheio' precisa usar o comando `.getFullYear()`
    - 9.3.2 O mês é conosiderado de 0 a 11, portanto é importante somoar mais 1. O comando para acessar o mês é: `.getMonth()`
    - 9.3.3 Para configurar o dia do mês utiliza o comando `.getDate() `
  - 9.4 Depois de ter separado as informações corretas, basta fazer um if com a condições que     verificam se o mês e o dia de aniversário já aconteceram este ano. Se as condições forem verdadeiras, isso significa que o aniversário ainda não ocorreu, e a função subtrai 1 da idade para refletir que a pessoa ainda não completou o aniversário deste ano. Caso contrário, a função retorna a idade atual da pessoa. Isso é útil ao calcular a idade com precisão, levando em consideração se o aniversário já ocorreu no ano atual.


- Carregando ███░░
- Finalizado ✔️
- Pendente ❌