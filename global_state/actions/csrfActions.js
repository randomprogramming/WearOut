import { ACTIONS } from '../constants';

const setCSRFToken = token => {
  return {
    action: ACTIONS.SET_CSRF_TOKEN,
    payload: token,
  };
};

export default { setCSRFToken };
