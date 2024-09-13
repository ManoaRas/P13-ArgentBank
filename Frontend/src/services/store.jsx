import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { api } from './api'

import authReducer from '../features/authSlice'
import userReducer from '../features/userSlice'

// Create Redux store with Redux toolkit
export const store = configureStore({
  reducer: combineReducers({
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    user: userReducer
  }), // Combine all reducers into one
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true // Redux devTools extension
})
