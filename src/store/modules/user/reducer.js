const INITIAL_STATE = {
  profile: null,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS': {
      return {
        profile: action.payload.user,
      };
    }
    case '@user/UPDATE_PROFILE_SUCCESS': {
      debugger;
      return {
        profile: action.payload.data,
      };
    }
    default:
      return state;
  }
}

export default user;
