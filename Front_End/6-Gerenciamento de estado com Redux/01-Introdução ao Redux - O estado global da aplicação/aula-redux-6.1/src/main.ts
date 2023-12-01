import { changeTheme } from './redux/actions';
import store from './redux/store';

const button = document.getElementById('light-switch') as HTMLButtonElement;
const wrapper = document.getElementById('wrapper') as HTMLElement;
const lightBulb = document.getElementById('light-bulb') as HTMLImageElement;

button.addEventListener('click', () => {
  const state = store.getState();
  if (state.theme === 'light') {
    store.dispatch(changeTheme('dark'));
  }
  if (state.theme === 'dark') {
    store.dispatch(changeTheme('light'));
  }
});

store.subscribe(() => {
  const state = store.getState();
  wrapper.className = state.theme;
  lightBulb.src = `img/${state.theme}.png`;
});
