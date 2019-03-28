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

export const createList = title => async (dispatch, getState) => {
  const { token } = getState().user;
  try {
    const response = await api.post(
      '/list',
      { title },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch({
      type: CREATE_LIST,
      payload: response.data.list
    });
  } catch (err) {
    dispatch({
      type: CREATE_LIST,
      error: true,
      payload: err.response
    });
  }
};

export const fetchList = id => async (dispatch, getState) => {
  const { token } = getState().user;
  try {
    const response = await api.get(`/list/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    dispatch({
      type: FETCH_LIST,
      payload: response.data.list
    });
  } catch (err) {
    dispatch({
      type: FETCH_LIST,
      error: true,
      payload: err.response
    });
  }
};

export const fetchLists = () => async (dispatch, getState) => {
  const { token } = getState().user;
  try {
    const response = await api.get(`/list/details`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    dispatch({
      type: FETCH_LISTS,
      payload: response.data.lists
    });
  } catch (err) {
    dispatch({
      type: FETCH_LISTS,
      error: true,
      payload: err.response
    });
  }
};

export const editList = (id, title) => async (dispatch, getState) => {
  const { token } = getState().user;
  try {
    const response = await api.patch(
      `/list/${id}`,
      { title },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch({
      type: EDIT_LIST,
      payload: response.data.list
    });
  } catch (err) {
    dispatch({
      type: EDIT_LIST,
      error: true,
      payload: err.response
    });
  }
};

export const deleteList = id => async (dispatch, getState) => {
  const { token } = getState().user;
  try {
    await api.delete(`/list/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    dispatch({
      type: DELETE_LIST,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: DELETE_LIST,
      error: true,
      payload: err.response
    });
  }
};

export const addItem = (listId, title, complete) => async (
  dispatch,
  getState
) => {
  const { token } = getState().user;
  try {
    const response = await api.post(
      '/item',
      { listId, title, complete },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch({
      type: ADD_ITEM,
      payload: {
        itemId: response.data.id,
        title: response.data.title,
        complete: response.data.complete,
        listId
      }
    });
  } catch (err) {
    dispatch({
      type: ADD_ITEM,
      error: true,
      payload: err.response
    });
  }
};

export const editItem = (listId, itemId, title, complete) => async (
  dispatch,
  getState
) => {
  const { token } = getState().user;
  try {
    const response = await api.post(
      `/item/${itemId}`,
      { title, complete },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch({
      type: EDIT_ITEM,
      payload: {
        itemId: response.data.id,
        title: response.data.title,
        complete: response.data.complete,
        listId
      }
    });
  } catch (err) {
    dispatch({
      type: EDIT_ITEM,
      error: true,
      payload: err.response
    });
  }
};

export const deleteItem = (listId, itemId) => async (dispatch, getState) => {
  const { token } = getState().user;
  try {
    await api.delete(`/item/${itemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    dispatch({
      type: DELETE_ITEM,
      payload: { listId, itemId }
    });
  } catch (err) {
    dispatch({
      type: DELETE_ITEM,
      error: true,
      payload: err.response
    });
  }
};
