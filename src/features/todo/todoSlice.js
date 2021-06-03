import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    {
      id: 1,
      text: 'This is a text',
      isChecked: false
    },
    {
      id: 2,
      text: 'This is a second text',
      isChecked: false
    },
    {
      id: 3,
      text: 'This is the third text',
      isChecked: true
    },
    {
      id: 4,
      text: 'This is a text',
      isChecked: false
    }
  ],
  reducers: {
    add: (state, { payload: text }) => {
      const id = Math.random();
      state.push({ text, isChecked: false, id });
    },
    remove: (state, { payload: id }) => {
      const itemIndex = state.findIndex(i => i.id === id);
      state.splice(itemIndex, 1);
    },
    check: (state, { payload: id }) => {
      const itemIndex = state.findIndex(i => i.id === id);
      state[itemIndex].isChecked = true;
    },
    uncheck: (state, { payload: id }) => {
      const itemIndex = state.findIndex(i => i.id === id);
      state[itemIndex].isChecked = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, check, uncheck } = todoSlice.actions;

export default todoSlice.reducer;
