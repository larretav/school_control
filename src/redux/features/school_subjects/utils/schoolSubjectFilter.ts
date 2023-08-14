import { filter } from "smart-array-filter";
import { ISchoolSubjectsState } from "../interfaces/school-subject.interface";

export const schoolSubjectFilter = (state: ISchoolSubjectsState) => {
  const { inpProfCareerSelected, inpSchoolSubject, schoolSubjects } = state;

  const isSchoolSubjEmpty = !inpSchoolSubject;
  const isProfCareerEmpty = !inpProfCareerSelected;


  if (isSchoolSubjEmpty && isProfCareerEmpty) return schoolSubjects;

  // const inpSchoolSubjQuery = isSchoolSubjEmpty ? inpSchoolSubject : '';
  // const inpQuery = hasBranchOfficeData ? `branchOffice:${hasWhiteSpace(inputBranchOffice) ? '' : '='}${inputBranchOffice}` : '';


  // resultQuery = filter(resultQueryOne, {
  //   keywords: `${branchOfficeQuery} ${assignedBranchQuery}`,
  //   predicate: 'OR'
  // });
}