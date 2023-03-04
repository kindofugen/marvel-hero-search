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
    signout(state) {
      state.user = {};
      state.isAuthorised = false;
    },
  },
});

export const { signin, signout } = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authSlice;
