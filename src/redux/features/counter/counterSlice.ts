import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIncrement: (state) => {
      state.value += 1
    },
    setDecrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setIncrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset: () => initialState
  },
})

export const {
  setIncrement,
  setDecrement,
  setIncrementByAmount,
  reset
} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer