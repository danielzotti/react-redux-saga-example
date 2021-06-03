import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({
  todo: todoReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;
