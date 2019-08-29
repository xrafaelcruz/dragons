import { all } from 'redux-saga/effects';

import login from 'redux/sagas/login';
import dragon from 'redux/sagas/dragon';

export default function* sagas() {
  yield all([...login, ...dragon]);
}
