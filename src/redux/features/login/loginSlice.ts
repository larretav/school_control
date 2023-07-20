import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface LoginState {
  currentForm: boolean,
}

// Define the initial state using that type
const initialState: LoginState = {
  currentForm: true
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {

    setToggleForm: (state) => {
      state.currentForm = !state.currentForm
    },


    reset: () => initialState
  },
})

export const {
  setToggleForm,

  reset
} = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentForm = (state: RootState) => state.login.currentForm;

export default loginSlice.reducer