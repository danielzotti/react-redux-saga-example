import { createAction, createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: []
  },
  reducers: {
    setList: (state, { payload }) => {
      console.log(payload);
      state.items = [...payload];
    },
    add: (state, { payload: text }) => {
      const id = Math.random();
      state.items.unshift({ text, isChecked: false, id });
    },
    remove: (state, { payload: id }) => {
      const itemIndex = state.items.findIndex(i => i.id === id);
      state.items.splice(itemIndex, 1);
    },
    check: (state, { payload: id }) => {
      const itemIndex = state.items.findIndex(i => i.id === id);
      state.items[itemIndex].isChecked = true;
    },
    uncheck: (state, { payload: id }) => {
      const itemIndex = state.items.findIndex(i => i.id === id);
      state.items[itemIndex].isChecked = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, check, uncheck, setList } = todoSlice.actions;

export const fetch = createAction('todo/fetch');

export default todoSlice.reducer;
