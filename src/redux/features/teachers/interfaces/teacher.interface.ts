import ProfessionalCareer from "@/models/professional-career.model";
import SchoolSubject from "@/models/school-subject.model";
import Student from "@/models/student.model";
import Teacher from "@/models/teacher.model";

// Define a type for the slice state
export interface ITeacherState {
  teachers: Teacher[],
  teachersFilterResults: Teacher[],

  inpTeacher: string,
  openNewTeacherDialog: boolean,
}