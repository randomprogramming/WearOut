import { ACTIONS } from '../constants';

const initialState = {
  username: undefined,
  isAuthenticated: false,
  isLoaded: false,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_ACCOUNT:
      return {
        username: action.payload.username,
        isAuthenticated: action.payload.authenticated,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default accountReducer;
