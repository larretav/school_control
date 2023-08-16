import ProfessionalCareer from "@/models/professional-career.model";

// Define a type for the slice state
export interface LoginState {
  currentForm: boolean,
  professionalCareers: ProfessionalCareer[]
}