import { filter } from "smart-array-filter";
import { IStudentState } from "../interfaces/student.interface";

const hasWhiteSpace = (str: string) => str.includes(' ');

export const studentFilter = (state: IStudentState) => {
  const { inpProfCareerSelected, inpStudent, students } = state;
  const isStudentEmpty = !inpStudent;
  const isProfCareerEmpty = inpProfCareerSelected == 'Todos' || !inpProfCareerSelected;

  if (isStudentEmpty && isProfCareerEmpty) return students;

  const inpStudentjQuery = !isStudentEmpty ? `fullName:"${inpStudent}"` : '';
  const inpProfCareerQuery = !isProfCareerEmpty ? `name:${hasWhiteSpace(inpProfCareerSelected) ? '' : '='}${inpProfCareerSelected}` : '';

  let resultQuery = filter(students, {
    keywords: `${inpStudentjQuery} ${inpProfCareerQuery}`,
    predicate: 'AND'
  });

  return resultQuery;
}