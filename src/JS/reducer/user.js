/* eslint-disable default-param-last */
import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../actionTypes/user';

// initialstate
const initialState = {
  user: {},
  errors: [],
  isAuth: false,
  load: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, load: true };

    case LOGIN_USER:
    case REGISTER_USER:
      localStorage.setItem('token', payload.token);
      return { ...state, user: payload.user, load: false, isAuth: true };
    case FAIL_USER:
      return { ...state, errors: payload, load: false };
    case CURRENT_USER:
      return { ...state, user: payload.user, isAuth: true };
    case LOGOUT_USER:
      localStorage.removeItem('token');
      return { ...state, user: {}, isAuth: false };
    case 'VIDE_ERRORS':
      return { ...state, errors: [] };
    default:
      return state;
  }
};

export default userReducer;
