import { combineReducers } from 'redux';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
import csrfReducer from './csrfReducer';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  csrf: csrfReducer,
});

export default rootReducer;
