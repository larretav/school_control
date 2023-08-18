import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import ProfessionalCareer from '@/models/professional-career.model'
import { ITeacherState } from './interfaces/teacher.interface'
import { teacherFilter } from './utils/teacherFilter'
import Student from '@/models/student.model'
import Teacher from '@/models/teacher.model'

// Define the initial state using that type
const initialState: ITeacherState = {
  teachers: [],
  teachersFilterResults: [],

  inpTeacher: '',
  openNewTeacherDialog: false
}

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {

    setTeachers: (state, action: PayloadAction<Teacher[]>) => {
      state.teachers = action.payload;
      state.teachersFilterResults = action.payload;
    },

    // Inptus
    setInputTeacher: (state, action: PayloadAction<string>) => {
      state.inpTeacher = action.payload;
      state.teachersFilterResults = teacherFilter(state);
    },

    setNewTeacherDialogToggle: (state) => {
      state.openNewTeacherDialog = !state.openNewTeacherDialog;
    },

    teacherReset: () => initialState
  },
})

export const {
  setTeachers,
  setInputTeacher,
  setNewTeacherDialogToggle,
  teacherReset
} = teachersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTeachers = (state: RootState) => state.teachers.teachers;
export const selectTeachersFilterResults = (state: RootState) => state.teachers.teachersFilterResults;

export const selectOpenNewTeacherDialog = (state: RootState) => state.teachers.openNewTeacherDialog;

// Inputs
export const selectInpTeacher = (state: RootState) => state.teachers.inpTeacher;

export default teachersSlice.reducer