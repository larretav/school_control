import SchoolSubject from "@/models/school-subject.model";
import { emptyApi } from "./api";
import ProfessionalCareer from "@/models/professional-career.model";


const apiWithTag = emptyApi.enhanceEndpoints({ addTagTypes: ['ProfessionalCareer'] })

export const professionalCareerApi = apiWithTag.injectEndpoints({

  endpoints: (builder) => ({
    getProfessionalCareer: builder.query<ProfessionalCareer[], void>({
      // query: () => '/professional_careers',
      query: () => '/professional-career/list/',
      transformResponse: (response: any[]) => {
        return response.map(profCareer => ProfessionalCareer.fromJson(profCareer))
      },
      providesTags: ['ProfessionalCareer'],
    }),

    addProfessionalCareer: builder.mutation({
      query: (body) => ({
        url: '/professional-career/create/',
        method: 'POST',
        body
      }),
    })

  })

});

export const { useLazyGetProfessionalCareerQuery, useAddProfessionalCareerMutation} = professionalCareerApi;