import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import ProfessionalCareer from '@/models/professional-career.model'
import { LoginState } from './interfaces/login-state.interface'

// Define the initial state using that type
const initialState: LoginState = {
  currentForm: true,
  professionalCareers: []
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {

    setToggleForm: (state) => {
      state.currentForm = !state.currentForm
    },

    setProfessionalCareers: (state, action: PayloadAction<ProfessionalCareer[]>) => {
      state.professionalCareers = action.payload;
    },

    loginReset: () => initialState
  },
})

export const {
  setToggleForm,
  setProfessionalCareers,
  
  loginReset
} = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentForm = (state: RootState) => state.login.currentForm;
export const selectProfessionalCareers = (state: RootState) => state.login.professionalCareers;

export default loginSlice.reducer