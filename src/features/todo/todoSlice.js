import { createAction, createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: []
  },
  reducers: {
    todoSetList: (state, { payload }) => {
      state.items = [...payload];
    },
    todoAdd: (state, { payload: text }) => {
      const id = Math.random();
      state.items.unshift({ text, isChecked: false, id });
    },
    todoRemove: (state, { payload: id }) => {
      const itemIndex = state.items.findIndex(i => i.id === id);
      state.items.splice(itemIndex, 1);
    },
    todoCheck: (state, { payload: id }) => {
      const itemIndex = state.items.findIndex(i => i.id === id);
      state.items[itemIndex].isChecked = true;
    },
    todoUncheck: (state, { payload: id }) => {
      const itemIndex = state.items.findIndex(i => i.id === id);
      state.items[itemIndex].isChecked = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { todoAdd, todoRemove, todoCheck, todoUncheck, todoSetList } = todoSlice.actions;

export const todoFetchList = createAction('todo/fetch');

export default todoSlice.reducer;
