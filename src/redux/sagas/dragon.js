// React
import { takeLatest, put, call } from 'redux-saga/effects';

import api from 'services/api';

// Actions
import { Types, getDragonListResult, deleteDragonResult } from 'redux/ducks/dragon';
import { showToast } from 'redux/ducks/toast';

export function* getDragonList(action) {
  try {
    const { data } = yield call(api.get, 'dragon');
    yield put(getDragonListResult(data));
  } catch (e) {
    yield put(showToast(e, 'error'));
    yield put(getDragonListResult());
  }
}

export function* deleteDragon(action) {
  try {
    yield call(api.delete, `dragon/${action.payload.id}`);

    const { data } = yield call(api.get, 'dragon');
    yield put(getDragonListResult(data));
  } catch (e) {
    yield put(showToast(e, 'error'));
    yield put(deleteDragonResult());
  }
}

const saga = [takeLatest(Types.GET_DRAGON_LIST, getDragonList), takeLatest(Types.DELETE_DRAGON, deleteDragon)];

export default saga;
