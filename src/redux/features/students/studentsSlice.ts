import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import ProfessionalCareer from '@/models/professional-career.model'
import { IStudentState } from './interfaces/student.interface'
import { studentFilter } from './utils/studentsFilter'
import Student from '@/models/student.model'

// Define the initial state using that type
const initialState: IStudentState = {
  students: [],
  studentsFilterResults: [],
  professionalCareers: [],

  inpProfCareerSelected: '',
  inpStudent: ''
}

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {

    setStudents: (state, action: PayloadAction<Student[]>) => {
      state.students = action.payload;
      state.studentsFilterResults = action.payload;
    },

    setProfessionalCareers: (state, action: PayloadAction<ProfessionalCareer[]>) => {
      state.professionalCareers = action.payload;
    },

    // Inptus
    setInputStudent: (state, action: PayloadAction<string>) => {
      state.inpStudent = action.payload;
      state.studentsFilterResults = studentFilter(state);
    },

    setInputProfCarrerSelected: (state, action: PayloadAction<string>) => {
      state.inpProfCareerSelected = action.payload;
      state.studentsFilterResults = studentFilter(state);
    },

    schoolSubjectsReset: () => initialState
  },
})

export const {
  setStudents,
  setProfessionalCareers,

  setInputStudent,
  setInputProfCarrerSelected,
  
  schoolSubjectsReset
} = studentsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectStudents = (state: RootState) => state.students.students;
export const selectStudentsFilterResults = (state: RootState) => state.students.studentsFilterResults;
export const selectProfessionalCareers = (state: RootState) => state.students.professionalCareers;

// Inputs
export const selectProfCareerSelected = (state: RootState) => state.students.inpProfCareerSelected;
export const selectInpStudent = (state: RootState) => state.students.inpStudent;

export default studentsSlice.reducer