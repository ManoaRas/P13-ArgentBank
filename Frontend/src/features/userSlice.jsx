import { createSlice } from "@reduxjs/toolkit";

/**
 * User slice based on RTK
 * It stores the user data (email, firstname, lastname)
 * If rememberMe is true then the token is stored into the localStorage to make the session persistent
 */

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    firstName: '',
    lastName: ''
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName

      if (action.payload.rememberMe || localStorage.getItem('firstName')) {
        localStorage.setItem('firstName', action.payload.firstName)
        localStorage.setItem('lastName', action.payload.lastName)
      }
    },
    clearUser: (state) => {
      state.email = ''
      state.firstName = ''
      state.lastName = ''
    },
    setName: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName

      if (action.payload.rememberMe || localStorage.getItem('firstName')) {
        localStorage.setItem('firstName', action.payload.firstName)
        localStorage.setItem('lastName', action.payload.lastName)
      }
    }
  }
})

export const { setUser, clearUser, setName } = userSlice.actions

export default userSlice.reducer

// Export selectors
export const selectCurrentUser = (state) => {
  return state.user.firstName
    ? state.user
    : {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName')
    }
}
