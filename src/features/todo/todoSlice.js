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
    add: (state, item) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state = [...state, item];
      state.push(item);
    },
    remove: (state, item) => {
      const itemIndex = state.findIndex(i => i.id === item.id);
      // state = state.filter(i => i.id !== item.id);
      state.splice(itemIndex, 1);
    },
    check: (state, item) => {
      const itemIndex = state.findIndex(i => i.id === item.id);
      state[itemIndex] = { ...item, isChecked: true };
    },
    uncheck: (state, item) => {
      const itemIndex = state.findIndex(i => i.id === item.id);
      state[itemIndex] = { ...item, isChecked: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, check, uncheck } = todoSlice.actions;

export default todoSlice.reducer;
