import SchoolSubject from "@/models/school-subject.model";
import { emptyApi } from "./api";
import ProfessionalCareer from "@/models/professional-career.model";


const apiWithTag = emptyApi.enhanceEndpoints({ addTagTypes: ['ProfessionalCareer'] })

export const professionalCareerApi = apiWithTag.injectEndpoints({

  endpoints: (builder) => ({
    getProfessionalCareer: builder.query<ProfessionalCareer[], void>({
      query: () => '/professional_careers',
      // query: () => '/professional-career/list/',
      transformResponse: (response: any[]) => {
        return response.map(profCareer => ProfessionalCareer.fromJson(profCareer))
      },
      providesTags: ['ProfessionalCareer'],
    }),

    getProfessionalCareerByTerm: builder.query<ProfessionalCareer, string>({
      query: (term: string) => `/professional_careers/${term}`,
      transformResponse: (response: any) => {
        return ProfessionalCareer.fromJson(response);
      },
      providesTags: ['ProfessionalCareer'],
    }),

  })

});

export const { useLazyGetProfessionalCareerQuery, useLazyGetProfessionalCareerByTermQuery} = professionalCareerApi;