import {
  CREATE_LIST,
  FETCH_LIST,
  FETCH_LISTS,
  EDIT_LIST,
  DELETE_LIST,
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM
} from './types';

export default (state = {}, action) => {
  if (action.error) return state;
  switch (action.type) {
    case CREATE_LIST:
    case EDIT_LIST:
    case FETCH_LIST:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case FETCH_LISTS:
      return {...state, ...action.payload.reduce((acc, cur) => ({...acc, [cur.id]: cur}), {})};
    case DELETE_LIST:
      return Object.keys(state).reduce(
        (acc, cur) =>
          cur.id === action.payload ? acc : { ...acc, [cur]: state[cur] },
        {}
      );
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.list]: {
          ...state[action.payload.list],
          items: [...state[action.payload.list].items, action.payload]
        }
      };
    case EDIT_ITEM:
      return {
        ...state,
        [action.payload.list]: {
          ...state[action.payload.list],
          items: state[action.payload.list].items.map(item =>
            item.id === action.payload.id ? action.payload : item
          )
        }
      };
    case DELETE_ITEM:
      return {
        ...state,
        [action.payload.listId]: {
          ...state[action.payload.listId],
          items: state[action.payload.listId].items.filter(
            item => item.id !== action.payload.itemId
          )
        }
      };
    default:
      return state;
  }
};
