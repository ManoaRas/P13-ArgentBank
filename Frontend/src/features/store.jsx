import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { userReducer } from "./userReducers"

// Create Redux store
export const store = configureStore({
  reducer: combineReducers({ user: userReducer }), // Combine all reducers into one
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true // Redux devTools extension
})
