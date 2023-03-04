import { isEqual } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { favorite: [] };

export const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setCharacterToFavorite(state, action) {
      console.log(action.payload);
      state.favorite.push({ ...action.payload });
    },
    removeCharacterFromFavorite(state, action) {
      const itemToRemoveIndex = state.favorite.findIndex((el) => isEqual(el, { ...action.payload }));
      state.favorite.splice(itemToRemoveIndex, 1);
    },
  },
});

export const { setCharacterToFavorite, removeCharacterFromFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export default favoritesSlice;
