import { ACTIONS } from '../constants';

const changeAccount = account => {
  return {
    type: ACTIONS.CHANGE_ACCOUNT,
    payload: account,
  };
};

export default { changeAccount };
