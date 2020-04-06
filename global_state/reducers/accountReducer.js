import { ACTIONS } from '../constants';

const initialState = {
  username: undefined,
  isAuthenticated: false,
  isLoaded: false,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default accountReducer;
