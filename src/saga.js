import { all, takeLatest } from 'redux-saga/effects';
import { getTodoList } from './features/todo/todoSaga';
import { fetch } from './features/todo/todoSlice';

export function* watcherSaga() {
  yield takeLatest(fetch, getTodoList);
}

export default function* rootSaga() {
  yield all([
    watcherSaga()
  ]);
}
