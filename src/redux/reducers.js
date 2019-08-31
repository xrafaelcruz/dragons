import { combineReducers } from 'redux';

import login from 'redux/ducks/login';
import toast from 'redux/ducks/toast';
import dragon from 'redux/ducks/dragon';
import route from 'redux/ducks/route';

export default combineReducers({
  login,
  toast,
  dragon,
  route
});
