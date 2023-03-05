import { createSlice } from '@reduxjs/toolkit';

const initialState = { history: [] };

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory(state, action) {
      console.log(action.payload);
      state.history.push(action.payload);
    },
    removeFromHistory(state, action) {},
  },
});

export const { addToHistory, removeFromHistory } = historySlice.actions;
export const historyReducer = historySlice.reducer;
export default historySlice;
