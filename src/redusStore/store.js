import { configureStore } from '@reduxjs/toolkit'
import slice1 from './slice1'

export const store = configureStore({
  reducer: {
    user:slice1
  },
})

