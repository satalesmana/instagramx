import { configureStore } from '@reduxjs/toolkit'
import registerSlice from './reducer/registerSlice'
import userSlice from './reducer/userSlice'

export default configureStore({
  reducer: {
    register : registerSlice,
    user: userSlice
  },
})
