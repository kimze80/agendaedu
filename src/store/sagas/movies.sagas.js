import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { MoviesTypes, MoviesActions } from '../ducks/movies.ducks';
import { POPULAR_BASE_URL } from '../../config';

export default function* getMoviesRequest() {
  try {
    const response = yield call(axios.get, POPULAR_BASE_URL);

    yield put(MoviesActions.moviesSuccess(response.data));
  } catch (error) {
    yield put(MoviesActions.moviesFailure(error));
  }
}

export function* watchSagas() {
  yield takeLatest(MoviesTypes.MOVIES_REQUEST, getMoviesRequest);
}
