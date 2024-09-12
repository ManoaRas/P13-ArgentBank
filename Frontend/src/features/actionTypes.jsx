// Define the types of actions
export const SET_LOGIN = 'SET_LOGIN'
export const SET_USER = 'SET_USER'
export const SET_TOKEN = 'SET_TOKEN'

// Action to define connection status
export const setLogin = (isLogin) => ({
  type: SET_LOGIN,
  payload: isLogin
})

// Action to define user
export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

// Action to define auth token
export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token
})
