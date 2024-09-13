import { createSlice } from "@reduxjs/toolkit";

/**
 * Auth slice based on RTK
 * It stores the token and the rememberMe values
 * If rememberMe is true then the token is stored into the localStorage to make the session persistent
 */

export const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null, rememberMe: false },
  reducers: {
    setToken: (state, action) => {
      const { token, rememberMe } = action.payload
      state.token = token
      state.rememberMe = rememberMe
      if (rememberMe) localStorage.setItem('token', token)
    },
    clearToken: (state) => {
      state.token = null
    }
  }
})

export const { setToken, clearToken } = authSlice.actions

export default authSlice.reducer

// Export selectors
export const selectCurrentToken = (state) => {
  return state.auth.token ? state.auth.token : localStorage.getItem('token')
}

export const selectCurrentRememberMe = (state) => state.auth.rememberMe
