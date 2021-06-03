import { combineReducers, createStore } from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
