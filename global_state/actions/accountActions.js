import axios from 'axios';

import { ACTIONS, API } from '../constants';

const changeAccount = (account) => {
  console.log('accc');
  console.log(account);
  return {
    type: ACTIONS.CHANGE_ACCOUNT,
    payload: account,
  };
};

export default { changeAccount };
