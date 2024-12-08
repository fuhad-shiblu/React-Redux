import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    fuhadShiblu_value: 1,
  },
  reducers: {
    fuhadShiblu_plus: (fuhadShiblu_state) => {
      fuhadShiblu_state.fuhadShiblu_value += 1
    },
    fuhadShiblu_minus: (fuhadShiblu_state) => {
      fuhadShiblu_state.fuhadShiblu_value -= 1
    },
  },
})
export const { fuhadShiblu_plus, fuhadShiblu_minus } = counterSlice.actions

export default counterSlice.reducer