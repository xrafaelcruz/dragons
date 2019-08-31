// React
import { takeLatest, put, call } from 'redux-saga/effects';

import api from 'services/api';

import { orderByName } from 'assets/scripts/order';

// Actions
import {
  Types,
  getDragonResult,
  getDragonListResult,
  deleteDragonResult,
  updateDragonResult
} from 'redux/ducks/dragon';
import { showToast } from 'redux/ducks/toast';
import { setNewUrl } from 'redux/ducks/route';

export function* getDragon(action) {
  try {
    const { data } = yield call(api.get, `dragon/${action.payload.id}`);
    yield put(getDragonResult(data));
  } catch (e) {
    yield put(showToast('Error fetching the dragon', 'error'));
    yield put(getDragonResult());
  }
}

export function* getDragonList(action) {
  try {
    const { data } = yield call(api.get, 'dragon');
    yield put(getDragonListResult(data.sort(orderByName)));
  } catch (e) {
    yield put(showToast('Error fetching the dragons', 'error'));
    yield put(getDragonListResult());
  }
}

export function* deleteDragon(action) {
  try {
    yield call(api.delete, `dragon/${action.payload.id}`);

    const { data } = yield call(api.get, 'dragon');
    yield put(getDragonListResult(data));
  } catch (e) {
    yield put(showToast('Error delete the dragon', 'error'));
    yield put(deleteDragonResult());
  }
}

export function* updateDragon(action) {
  try {
    yield call(api.put, `dragon/${action.payload.dragon.id}`, action.payload.dragon);
    yield put(setNewUrl('/dragons'));
    yield put(updateDragonResult());
  } catch (e) {
    yield put(showToast('Error update the dragon', 'error'));
    yield put(updateDragonResult());
  }
}

const saga = [
  takeLatest(Types.GET_DRAGON, getDragon),
  takeLatest(Types.GET_DRAGON_LIST, getDragonList),
  takeLatest(Types.DELETE_DRAGON, deleteDragon),
  takeLatest(Types.UPDATE_DRAGON, updateDragon)
];

export default saga;
