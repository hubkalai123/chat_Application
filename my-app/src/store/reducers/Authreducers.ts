'use clinet';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from "js-cookie";

interface AuthState {
  istoken:string;
  user: any;
}
let istoken = null;
let user = null;

// Retrieve and assign the token from cookies
istoken = Cookies.get("token") ? Cookies.get("token") : null;

// Retrieve and parse the user from local storage
let userData = localStorage.getItem("user");
user = userData ? JSON.parse(userData) : null;

const initialState: AuthState = {
  istoken: istoken ?? "", 
  user: user ?? [],
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,actions) => {
      Cookies.set("token", actions?.payload?.token);
      state.istoken = actions?.payload?.token;
    },
    setCurrentuser: (state,actions) => {
      localStorage.setItem("user", JSON.stringify(actions?.payload));
      state.user = actions?.payload;
    },
    logout: (state,actions) => {
      Cookies.remove("token");
    },
  },
});

export const { login, logout , setCurrentuser} = authSlice.actions;

export default authSlice.reducer;
