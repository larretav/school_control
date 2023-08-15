import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import SchoolSubject from '@/models/school-subject.model'
import ProfessionalCareer from '@/models/professional-career.model'
import { ISchoolSubjectsState } from './interfaces/school-subject.interface'
import { schoolSubjectFilter } from './utils/schoolSubjectFilter'

// Define the initial state using that type
const initialState: ISchoolSubjectsState = {
  schoolSubjects: [],
  professionalCareers: [],
  schoolSubjectsFilterResults: [],

  inpProfCareerSelected: '',
  inpSchoolSubject: ''
}

export const schoolSubjectsSlice = createSlice({
  name: 'schoolSubjects',
  initialState,
  reducers: {

    setSchoolSubjects: (state, action: PayloadAction<SchoolSubject[]>) => {
      state.schoolSubjects = action.payload;
      state.schoolSubjectsFilterResults = action.payload;
    },

    setProfessionalCareers: (state, action: PayloadAction<ProfessionalCareer[]>) => {
      state.professionalCareers = action.payload;
    },

    // Inptus
    setInputSchoolSubject: (state, action: PayloadAction<string>) => {
      state.inpSchoolSubject = action.payload;
      state.schoolSubjectsFilterResults = schoolSubjectFilter(state);
    },

    setInputProfCarrerSelected: (state, action: PayloadAction<string>) => {
      state.inpProfCareerSelected = action.payload;
      state.schoolSubjectsFilterResults = schoolSubjectFilter(state);
    },

    schoolSubjectsReset: () => initialState
  },
})

export const {
  setSchoolSubjects,
  setProfessionalCareers,

  setInputSchoolSubject,
  setInputProfCarrerSelected,
  
  schoolSubjectsReset
} = schoolSubjectsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSchoolSubjects = (state: RootState) => state.schoolSubjects.schoolSubjects;
export const selectSchoolSubjectsFilterResults = (state: RootState) => state.schoolSubjects.schoolSubjectsFilterResults;
export const selectProfessionalCareers = (state: RootState) => state.schoolSubjects.professionalCareers;

// Inputs
export const selectProfCareerSelected = (state: RootState) => state.schoolSubjects.inpProfCareerSelected;
export const selectInpSchoolSubject = (state: RootState) => state.schoolSubjects.inpSchoolSubject;

export default schoolSubjectsSlice.reducer