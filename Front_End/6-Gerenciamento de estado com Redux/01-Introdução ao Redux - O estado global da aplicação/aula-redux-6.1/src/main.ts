//  Importando as informações que serão usado. Indicando apenas o caminho
import { changeTheme } from './redux/actions';
import store from './redux/store';

// Utilizando DOM para usar as tags do HTML. O 'as HTML...' é apenas para tipagem
const button = document.getElementById('light-switch') as HTMLButtonElement;
const wrapper = document.getElementById('wrapper') as HTMLElement;
const lightBulb = document.getElementById('light-bulb') as HTMLImageElement;

// Usou um 'escutador de evento' no botão, para que quando a ação de clicar for feito
button.addEventListener('click', () => {
  // Acessa a store através do getState(). A store armazena as informações do estado global
  const state = store.getState();
  // Depois que aceesou o estado, ele verificar se o tema é claro ou escuro
  if (state.theme === 'light') {
    store.dispatch(changeTheme('dark'));
  }
  if (state.theme === 'dark') {
    store.dispatch(changeTheme('light'));
  }
});

// Esse trecho listener na Store que é acionado sempre que o estado é atualizado. 
// Quando o estado é atualizado, ele pega o novo valor da propriedade theme e utiliza  a classe do elemento (wrapper) e do (lightBulb).
store.subscribe(() => {
  const state = store.getState();
  wrapper.className = state.theme;
  lightBulb.src = `img/${state.theme}.png`;
});
