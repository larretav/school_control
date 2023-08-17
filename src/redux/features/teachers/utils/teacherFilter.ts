import { filter } from "smart-array-filter";
import { ITeacherState } from "../interfaces/teacher.interface";

export const teacherFilter = (state: ITeacherState) => {
  const { inpTeacher, teachers } = state;

  const isStudentEmpty = !inpTeacher;

  if (isStudentEmpty) return teachers;

  const inpStudentjQuery = !isStudentEmpty ? `fullName:"${inpTeacher}"` : '';

  let resultQuery = filter(teachers, {
    keywords: `${inpStudentjQuery}`,
    predicate: 'AND'
  });

  return resultQuery;
}