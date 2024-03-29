/* eslint-disable no-console */
import axios from 'axios';

import { GET_CONTACTS, ADD_CONTACT, GET_CONTACT, TOGGLE_TRUE, TOGGLE_FALSE } from '../actionTypes/contact';

export const addContact = (contact) => async (dispatch) => {
  try {
    const res = await axios.post('/api/contact/add', contact);
    dispatch({ type: ADD_CONTACT, payload: res.data.contact });
  } catch (error) {
    console.log(error);
  }
};
export const getContacts = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    const res = await axios.get('/api/contact/getContact', config);

    dispatch({ type: GET_CONTACTS, payload: res.data.contacts }); // {msg,contacts}
  } catch (error) {
    console.log(error);
  }
};

export const videErrors = () => ({
  type: 'VIDE_ERRORS',
});
export const deleteContact = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    await axios.delete(`/api/contact/${id}`, config);
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    const res = await axios.get(`/api/contact/${id}`, config);
    dispatch({ type: GET_CONTACT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const toggleTrue = () => ({
  type: TOGGLE_TRUE,
});
export const toggleFalse = () => ({
  type: TOGGLE_FALSE,
});
