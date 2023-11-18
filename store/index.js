




import { configureStore } from '@reduxjs/toolkit'
import registerSlice from './reducer/registerSlice'

export default configureStore({
  reducer: {
    register : registerSlice
  },
})
