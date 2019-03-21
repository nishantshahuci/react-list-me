import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: false,
  user: null,
  token: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN: {
      console.log('signin: ', action);
      if (action.error) return { ...state, isSignedIn: null };
      else
        return {
          ...state,
          isSignedIn: true,
          user: action.payload.user,
          token: action.payload.token
        };
    }
    case SIGN_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
