import { createReducer } from "@reduxjs/toolkit"

import { SET_LOGIN, SET_USER, SET_TOKEN } from "./actionTypes"

// Initial state of reducer
const initialState = {
  isLogin: false,
  userData: "",
  token: null
}

// Define the reducer
export const userReducer = createReducer(initialState, {
  [SET_LOGIN]: (state, action) => {
    state.isLogin = action.payload
  },
  [SET_USER]: (state, action) => {
    state.userData = action.payload
  },
  [SET_TOKEN]: (state, action) => {
    state.token = action.payload
  }
})
