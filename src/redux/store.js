import { configureStore } from '@reduxjs/toolkit'
import bikeReducer from './slices/bikeSlice'
export const store = configureStore({
  reducer: {
    bikes: bikeReducer,
  },
})