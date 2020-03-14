import {CHANGE_USER} from '../constants';

const changeUser = user => {
  return {
    type: CHANGE_USER,
    payload: user,
  };
};

export default {changeUser};
