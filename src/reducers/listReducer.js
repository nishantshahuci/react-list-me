import {
  SIGN_OUT,
  CREATE_LIST,
  FETCH_LIST,
  FETCH_LISTS,
  EDIT_LIST,
  DELETE_LIST,
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM
} from '../actions/types';

export default (state = {}, action) => {
  if (action.error)
    if (action.payload.status === 401) return {};
    else return state;

  switch (action.type) {
    case CREATE_LIST:
    case EDIT_LIST:
    case FETCH_LIST:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case FETCH_LISTS:
      return {
        ...state,
        ...action.payload
      };
    case DELETE_LIST:
      return Object.keys(state).reduce(
        (acc, cur) =>
          parseInt(cur) === action.payload
            ? acc
            : { ...acc, [cur]: state[cur] },
        {}
      );
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.listId]: {
          ...state[action.payload.listId],
          items: state[action.payload.listId].items
            .concat([
              {
                id: action.payload.itemId,
                title: action.payload.title,
                complete: action.payload.complete
              }
            ])
            .sort((a, b) => a.itemId - b.itemId)
        }
      };
    case EDIT_ITEM: {
      return {
        ...state,
        [action.payload.listId]: {
          ...state[action.payload.listId],
          items: state[action.payload.listId].items
            .map(item =>
              item.id === action.payload.itemId
                ? {
                    ...item,
                    title: action.payload.title,
                    complete: action.payload.complete
                  }
                : item
            )
            .sort((a, b) => a.itemId - b.itemId)
        }
      };
    }
    case DELETE_ITEM:
      return {
        ...state,
        [action.payload.listId]: {
          ...state[action.payload.listId],
          items: state[action.payload.listId].items
            .filter(item => item.id !== action.payload.itemId)
            .sort((a, b) => a.itemId - b.itemId)
        }
      };
    case SIGN_OUT:
      return {};
    default:
      return state;
  }
};
