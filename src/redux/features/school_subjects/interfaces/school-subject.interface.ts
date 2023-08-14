import ProfessionalCareer from "@/models/professional-career.model";
import SchoolSubject from "@/models/school-subject.model";

// Define a type for the slice state
export interface ISchoolSubjectsState {
  schoolSubjects: SchoolSubject[],
  professionalCareers: ProfessionalCareer[],

  inpProfCareerSelected: string,
  inpSchoolSubject: string
}