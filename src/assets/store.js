import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slices/CounterSlice'

export default configureStore({
  reducer: {
     fuhadShiblu_counter: counterSlice,
  },
})