// React
import { takeLatest, put } from 'redux-saga/effects';

// Actions
import { Types, loginResult } from 'redux/ducks/login';
import { showToast } from 'redux/ducks/toast';

// SIMULACAO DE LOGIN
export function* login(action) {
  try {
    if (action.payload.username === 'adm' && action.payload.password === '123') {
      const user = {
        name: 'ADM',
        image: ''
      };

      yield put(showToast('Login success', 'success'));
      yield put(loginResult(user));
    } else {
      // eslint-disable-next-line
      throw 'Login invalido';
    }
  } catch (e) {
    yield put(showToast(e, 'error'));
    yield put(loginResult());
  }
}

const saga = [takeLatest(Types.LOGIN, login)];

export default saga;
