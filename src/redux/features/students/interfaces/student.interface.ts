import ProfessionalCareer from "@/models/professional-career.model";
import SchoolSubject from "@/models/school-subject.model";
import Student from "@/models/student.model";

// Define a type for the slice state
export interface IStudentState {
  students: Student[],
  studentsFilterResults: Student[],
  professionalCareers: ProfessionalCareer[],

  inpProfCareerSelected: string,
  inpStudent: string
}