import { ACTIONS } from '../constants';

const initialState = '';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_VALUE:
      return action.payload;
    default:
      return initialState;
  }
};

export default searchReducer;
