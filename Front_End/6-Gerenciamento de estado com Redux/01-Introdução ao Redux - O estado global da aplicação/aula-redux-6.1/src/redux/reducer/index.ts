import { AnyAction } from 'redux';
import { CHANGE_THEME } from '../actions';

const INITIAL_STATE = {
  theme: 'light',
};

const rootReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

export default rootReducer;
