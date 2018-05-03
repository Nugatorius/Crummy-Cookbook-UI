import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export function* fetchGenres() {
  yield put({ type: 'GENRE_START' });
  const data = yield (axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b7c6736ab2f1462356f9a09ed437b389&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=7&year=2018'));
  yield put({type: 'GENRE_FETCH_SUCCESS', payload: data});
}

export function* watchFetch() {
  yield takeEvery('GENRE_FETCH_SUCCESS_ASYNC', fetchGenres);
}

export default function* rootSaga() {
  yield [
    watchFetch()
  ];
}
