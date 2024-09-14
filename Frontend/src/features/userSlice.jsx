import { createSelector, createSlice } from "@reduxjs/toolkit"

/**
 * User slice based on RTK
 * It stores the user data (email, firstname, lastname)
 * If rememberMe is true then the token is stored into the localStorage to make the session persistent
 */

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    firstName: null,
    lastName: null
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.email = payload.email
      state.firstName = payload.firstName
      state.lastName = payload.lastName

      if (payload.rememberMe || localStorage.getItem('firstName')) {
        localStorage.setItem('firstName', payload.firstName)
        localStorage.setItem('lastName', payload.lastName)
      }
    },
    clearUser: (state, _) => {
      state.email = null
      state.firstName = null
      state.lastName = null
    },
    setName: (state, { payload }) => {
      state.firstName = payload.firstName
      state.lastName = payload.lastName

      if (payload.rememberMe || localStorage.getItem('firstName')) {
        localStorage.setItem('firstName', payload.firstName)
        localStorage.setItem('lastName', payload.lastName)
      }
    }
  }
})

export const { setUser, clearUser, setName } = userSlice.actions

export default userSlice.reducer

// Export selectors
export const selectCurrentUser = createSelector(
  (state) => state.user,
  (user) => {
    if (user.firstName) return user
    return {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName')
    }
  }
)
