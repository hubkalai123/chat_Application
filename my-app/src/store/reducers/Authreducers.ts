// 'use clinet';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,actions) => {debugger;
      state.isAuthenticated = actions?.payload;
    },
    logout: (state,actions) => {
      state.isAuthenticated = actions?.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
