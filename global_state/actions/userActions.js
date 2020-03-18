import { ACTIONS } from '../constants';

const changeUser = user => {
  return {
    type: ACTIONS.CHANGE_USER,
    // TODO: Fix this
    payload: user,
  };
};

export default { changeUser };
