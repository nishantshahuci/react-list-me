import api from '../api/api';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_LIST,
  FETCH_LIST,
  FETCH_LISTS,
  EDIT_LIST,
  DELETE_LIST,
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM
} from './types';

export const signIn = (email, password) => async dispatch => {
  try {
    const response = await api.post('/user/authenticate', { email, password });
    dispatch({
      type: SIGN_IN,
      payload: response.data
    });
    // route user to root page
    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: SIGN_IN,
      error: true,
      payload: err.response
    });
  }
};

export const signOut = () => {
  history.push('/');
  return {
    type: SIGN_OUT
  };
};
