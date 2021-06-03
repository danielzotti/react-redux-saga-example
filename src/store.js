import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga';


const reducer = combineReducers({
  todo: todoReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

// const action = type => store.dispatch({ type });

export default store;
