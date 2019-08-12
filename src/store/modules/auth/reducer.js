const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST': {
      return {
        ...state,
        loading: true,
      };
    }
    case '@auth/SIGN_IN_SUCCESS': {
      return {
        loading: false,
        token: action.payload.token,
        signed: true,
      };
    }
    case '@auth/SIGN_UP_REQUEST': {
      return {
        ...state,
        loading: true,
      };
    }
    case '@auth/SIGN_UP_SUCCESS': {
      return {
        ...state,
        loading: false,
      };
    }
    case '@auth/SIGN_FAILURE': {
      return {
        ...state,
        loading: false,
      };
    }
    case '@auth/SIGN_OUT': {
      return {
        ...state,
        token: null,
        signed: false,
      };
    }
    default:
      return state;
  }
}

export default auth;
