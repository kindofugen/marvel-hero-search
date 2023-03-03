import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: window.localStorage.getItem('name') || {},
  isAuthorised: !!window.localStorage.getItem('token'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin(state, action) {
      state.user = action.payload;
      state.isAuthorised = true;
    },
    signout(state, action) {
      state.user = action.payload;
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('name');
      state.isAuthorised = false;
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
