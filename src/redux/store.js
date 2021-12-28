import { configureStore } from '@reduxjs/toolkit'
import bikeReducer from './slices/bookSlice'
export const store = configureStore({
  reducer: {
    bikes: bikeReducer,
  },
})