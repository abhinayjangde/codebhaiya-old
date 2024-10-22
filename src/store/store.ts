// store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@/store/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch