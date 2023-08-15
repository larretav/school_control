import { filter } from "smart-array-filter";
import { ISchoolSubjectsState } from "../interfaces/school-subject.interface";

const hasWhiteSpace = (str: string) => str.includes(' ');

export const schoolSubjectFilter = (state: ISchoolSubjectsState) => {
  const { inpProfCareerSelected, inpSchoolSubject, schoolSubjects} = state;

  const isSchoolSubjEmpty = !inpSchoolSubject;
  const isProfCareerEmpty = inpProfCareerSelected == 'Todos' || !inpProfCareerSelected ;

  if (isSchoolSubjEmpty && isProfCareerEmpty) return schoolSubjects;

  const inpSchoolSubjQuery = !isSchoolSubjEmpty ? `name:"${inpSchoolSubject}"`  : '';
  const inpProfCareerQuery = !isProfCareerEmpty ? `name:${hasWhiteSpace(inpProfCareerSelected) ? '' : '='}${inpProfCareerSelected}` : '';

  let resultQuery = filter(schoolSubjects, {
    keywords: `${inpSchoolSubjQuery} ${inpProfCareerQuery}`,
    predicate: 'AND'
  });

  return resultQuery;
}