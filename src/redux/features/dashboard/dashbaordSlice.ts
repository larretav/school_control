import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { IDashboardState } from './interfaces/dashboard.interface'

// Define the initial state using that type
const initialState: IDashboardState = {
  studentsCount: 0,
  teachersCount: 0,
  subjectsCount: 0,
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {

    setTeachersCount: (state, action: PayloadAction<number>) => {
      state.teachersCount = action.payload;
    },
    
    setStudentsCount: (state, action: PayloadAction<number>) => {
      state.studentsCount = action.payload;
    },

    setSubjectsCount: (state, action: PayloadAction<number>) => {
      state.subjectsCount = action.payload;
    },

    dashboardReset: () => initialState
  },
})

export const {
  setTeachersCount,
  setStudentsCount,
  setSubjectsCount,

  dashboardReset
} = dashboardSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectStudentsCount = (state: RootState) => state.dashboard.studentsCount;
export const selectTeachersCount = (state: RootState) => state.dashboard.teachersCount;
export const selectSubjectsCount = (state: RootState) => state.dashboard.subjectsCount;

export default dashboardSlice.reducer