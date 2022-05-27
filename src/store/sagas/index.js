import { all } from 'redux-saga/effects';
import * as movies from './movies.sagas';

function* sagas() {
  yield all([movies.watchSagas()]);
}

export default sagas;
