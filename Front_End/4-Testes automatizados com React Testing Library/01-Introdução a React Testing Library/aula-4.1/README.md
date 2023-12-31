# ⚙️ Configuração do Projeto React ⚛️ com TS, Lint, Vite, RTL, e Jest 

## Passo 1: ⚙️ Configuração Inicial 💻

1. **Crie um projeto React⚛️ com TS usando Vite**
   
   ✔️ **1.1** Execute o comando:
      ```bash
         npm create vite@latest
      ```
   ✔️ **1.2** Execute o comando
      ```bash
         npm install
      ```
   ✔️ **1.3** Instale as bibliotecas necessárias:
     ```bash
     npm i -D vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest
     npm i -D @testing-library/user-event
     ```

## Passo 2: ⚙️ Configuração do ESLint

2. **Configurar o ESLint**

    ✔️**2.1** Remova as dependências instaladas pelo VITE:
     ```bash
     npm remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint-plugin-react-refresh
     ```
   ✔️**2.2** Instale o pacote de regras de lint:
     ```bash
     npm install @trybe/eslint-config-frontend -D
     ```
   ✔️**2.3** Crie o arquivo `.eslintrc.json` na raiz do projeto e adicione:
     ```bash
     {
       "extends": "@trybe/eslint-config-frontend/typescript"
     }
     ```
   ✔️**2.4** Configuração do VSCode:
   
     Crie um arquivo na pasta raiz:
      ```bash
         touch settings.json
      ```
      Configure esse arquivo:
      ```bash
      {
        "editor.formatOnSave": true,
        "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true,
        },
        "extensions.ignoreRecommendations": false
      }
      ```
   ✔️**2.5** Adicione o script de lint no `package.json`:
     ```bash
     "scripts": {
       "lint": "eslint src --ext .ts,.tsx"
     }
     ```

## Passo 3: ⚙️ Configuração do Vitest

3. **Configurar o Vitest**

   ✔️**3.1** Atualize o arquivo `vite.config.ts`:
     ```bash
     // vite.config.ts
     /// <reference types="vitest" />

     import { defineConfig } from 'vite'
     import react from '@vitejs/plugin-react'

     export default defineConfig({
       plugins: [react()],
       test: {
         globals: true,
         environment: 'jsdom',
         setupFiles: './setupTests.ts',
         css: true,
         reporters: ['verbose'],
         coverage: {
           reporter: ['text', 'json', 'html'],
           provider: 'v8'
         }
       },
     })
     ```
   ✔️**3.2** Adicione scripts ao `package.json`:
     ```bash
     "scripts": {
       "test": "vitest",
       "coverage": "vitest run --coverage"
     }
     ```

## Passo 4: 🤖 Testes com RTL

4. **Testes com RTL (React Testing Library)**

   ✔️**4.1** Instale as dependências:
     ```bash
     npm i -D @testing-library/jest-dom @testing-library/react @testing-library/user-event identity-obj-proxy jest-environment-jsdom
     ```
   ✔️**4.2** Crie arquivos necessários:
      
     Dentro do arquivo `jest.config.js` configure
      ```bash
       module.exports = {
         testEnvironment: 'jest-environment-jsdom',
         setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.js'],
         moduleNameMapper: {
           '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/mock.js',
           '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
         },
       }
      ```
   ✔️**4.3** Instale as bibliotecas babel:
     ```bash
     npm i -D @babel/core @babel/preset-env @babel/preset-react babel-jest
     ```
   ✔️**4.4** Crie o arquivo `babel.config.json`:
    ```bash
     {
       "presets": [
         ["@babel/preset-env", { "targets": { "esmodules": true } }],
         ["@babel/preset-react", { "runtime": "automatic" }]
       ]
     }
     ```
   ✔️ **4.5** Remova  a chave `type` do `package.json` .