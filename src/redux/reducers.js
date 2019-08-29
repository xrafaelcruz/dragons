import { combineReducers } from 'redux';

import login from 'redux/ducks/login';
import toast from 'redux/ducks/toast';
import dragon from 'redux/ducks/dragon';

export default combineReducers({
  login,
  toast,
  dragon
});
