import { all, put, call } from 'redux-saga/effects';
import { fetchTodoList } from './api';
import { setList } from './todoSlice';


export function* getTodoList(action) {
  try {
    const response = yield call(fetchTodoList);
    yield put(setList(response));
  } catch(error) {
    console.log('error', error);
  }
}

export default function* todoSaga() {
  yield all([
    getTodoList()
  ]);
}
