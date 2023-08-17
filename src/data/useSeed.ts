import { IProfessionalCareerBody } from "@/interfaces/professional-career-body.interface";
import { useAddProfessionalCareerMutation } from "@/redux/app/services/professional-careers.service"
import { initProfessionalCareersData, initSchoolGroupsData, initSchoolSubjectsIngCivilData, initSchoolSubjectsIngSoftwareData } from ".";
import { useAddSchoolGroupMutation } from "@/redux/app/services/school-groups.service";
import { useAddSchoolSubjectMutation } from "@/redux/app/services/school-subjects.service";
import { initSchoolSubjectsIngGeodesicaData } from "./school_subjects_ing_geodesica";

export const useSeed = () => {

  const [addProfCareerMut, { isUninitialized: isUniProf, isLoading: isLoProf }] = useAddProfessionalCareerMutation();
  const [addSchoolGroupMut, { isUninitialized: isUniGroups, isLoading: isLoGroups }] = useAddSchoolGroupMutation();
  const [addSchoolSubjMut, { isUninitialized: isUniSubj, isLoading: isLoSubj }] = useAddSchoolSubjectMutation();


  const executeSeedProfCareers = async () => {

    initProfessionalCareersData.forEach(async (career) => {
      try {
        await addProfCareerMut(career).unwrap();
      } catch (error) {
        throw error
      }
    })

  }

  const executeSeedGroups = async () => {

    initSchoolGroupsData.forEach(async (group) => {
      try {
        await addSchoolGroupMut(group).unwrap();
      } catch (error) {
        throw error
      }
    })

  }
  const executeSeedSchoolSubjects = async () => {

    initSchoolSubjectsIngSoftwareData.forEach(async (career) => {
      try {
        career.career = 8
        await addSchoolSubjMut(career).unwrap();
      } catch (error) {
        throw error
      }
    })

    initSchoolSubjectsIngCivilData.forEach(async (career) => {
      try {
        career.career = 9
        await addSchoolSubjMut(career).unwrap();
      } catch (error) {
        throw error
      }
    })

    initSchoolSubjectsIngGeodesicaData.forEach(async (career) => {
      try {
        career.career = 7
        await addSchoolSubjMut(career).unwrap();
      } catch (error) {
        throw error
      }
    })

  }

  return {
    executeSeedProfCareers,
    executeSeedGroups,
    executeSeedSchoolSubjects,

    isLoading: isLoProf || isLoSubj || isLoGroups
  }
}