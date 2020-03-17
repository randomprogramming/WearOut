import { ACTIONS } from '../constants';

const changeUser = user => {
  return {
    type: ACTIONS.CHANGE_USER,
    payload: user,
  };
};

export default { changeUser };
