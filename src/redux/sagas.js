import { all } from 'redux-saga/effects';

import login from 'redux/sagas/login';

export default function* sagas() {
  yield all([...login]);
}
