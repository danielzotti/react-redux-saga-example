import { all, put, call, takeLatest } from 'redux-saga/effects';
import { fetchTodoList } from './api';
import { todoFetchList, todoSetList } from './todoSlice';

export function* watchGetTodoList() {
  yield takeLatest(todoFetchList, getTodoList);
}

export function* getTodoList() {
  try {
    const response = yield call(fetchTodoList);
    yield put(todoSetList(response));
  } catch(error) {
    console.log('error', error);
    yield [];
  }
}

export default function* todoSaga() {
  yield all([
    watchGetTodoList()
  ]);
}
