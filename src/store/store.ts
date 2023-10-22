import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import darkModeReducer from './slices/darkModeSlicer'

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
