import { ACTIONS } from '../constants';

const setSearchValue = searchValue => {
  return {
    action: ACTIONS.SET_SEARCH_VALUE,
    payload: searchValue,
  };
};

export default { setSearchValue };
