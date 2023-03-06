import { createSlice } from '@reduxjs/toolkit';

const initialState = { history: [] };

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory(state, action) {
      const isInHistory = state.history.some((el) => el.value === action.payload.value);
      if (!isInHistory) {
        state.history.push(action.payload);
      }
    },
    removeFromHistory(state, action) {
      const itemToRemoveIndex = state.history.findIndex((el) => el.id === action.payload);
      state.history.splice(itemToRemoveIndex, 1);
    },
    clearHistory(state) {
      state.history = [];
    },
  },
});

export const { addToHistory, removeFromHistory, clearHistory } = historySlice.actions;
export const historyReducer = historySlice.reducer;
export default historySlice;
