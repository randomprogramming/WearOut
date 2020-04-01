import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import searchReducer from './searchReducer';
import csrfReducer from './csrfReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  search: searchReducer,
  csrf: csrfReducer,
});

export default rootReducer;
