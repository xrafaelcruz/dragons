import { combineReducers } from 'redux';

import login from 'redux/ducks/login';
import toast from 'redux/ducks/toast';

export default combineReducers({
  login,
  toast
});
