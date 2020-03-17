import { ACTIONS } from '../constants';

const initialState = {
  username: undefined,
  isAuthenticated: false,
  isLoaded: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_USER:
      return {
        username: action.payload.username,
        isAuthenticated: action.payload.username.length > 0,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default userReducer;
