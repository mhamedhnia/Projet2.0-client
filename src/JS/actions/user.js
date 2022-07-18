import axios from 'axios';

import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../actionTypes/user';

export const currentUser = () => async (dispatch) => {
  dispatch({
    type: LOAD_USER,
  });
  try {
    const options = {
      headers: { authorization: localStorage.getItem('token') },
    };
    const result = await axios.get('/api/user/current', options);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post('/api/user/login', user);
    dispatch({ type: LOGIN_USER, payload: result.data }); // msg /token , user
    history.push('/admin');
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const register = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post('/api/user/register', user);
    dispatch({ type: REGISTER_USER, payload: result.data }); // msg /token , user
    history.push('/profile');
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const logout = () => ({
  type: LOGOUT_USER,
});

export const videErrors = () => ({
  type: 'VIDE_ERRORS',
});
