// React
import { takeLatest, put, call } from 'redux-saga/effects';

import api from 'services/api';

// Actions
import { Types, getDragonListResult } from 'redux/ducks/dragon';
import { showToast } from 'redux/ducks/toast';

// SIMULACAO DE LOGIN
export function* getDragonList(action) {
  try {
    const { data } = yield call(api.get, 'dragon');
    yield put(getDragonListResult(data));
  } catch (e) {
    yield put(showToast(e, 'error'));
    yield put(getDragonListResult());
  }
}

const saga = [takeLatest(Types.GET_DRAGON_LIST, getDragonList)];

export default saga;
