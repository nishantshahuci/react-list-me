import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: false,
  user: null,
  token: null
};

export default (state = INITIAL_STATE, action) => {
  if (action.error && action.payload.status === 401) return INITIAL_STATE;
  switch (action.type) {
    case SIGN_IN:
      if (action.error && action.payload.status === 400)
        return { ...INITIAL_STATE, isSignedIn: null };
      return {
        ...state,
        isSignedIn: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case SIGN_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
