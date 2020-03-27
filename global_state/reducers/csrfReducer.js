import { ACTIONS } from '../constants';

const initialState = {
  headerName: '',
  parameterName: '',
  token: '',
};

const csrfReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CSRF_TOKEN:
      return {
        headerName: action.payload.headerName,
        parameterName: action.payload.parameterName,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export default csrfReducer;
