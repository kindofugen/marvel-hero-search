import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthorised: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin(state, action) {
      state.user = action.payload;
      state.isAuthorised = true;
    },
  },
});

export const { signin } = authSlice.actions;
export default authSlice.reducer;
