import SchoolSubject from "@/models/school-subject.model";
import { emptyApi } from "./api";


const apiWithTag = emptyApi.enhanceEndpoints({ addTagTypes: ['SchoolSubjects', 'SchoolSubjectById'] })

export const schoolSubjectsApi = apiWithTag.injectEndpoints({

  endpoints: (builder) => ({
    getSchoolSubjects: builder.query<SchoolSubject[], void>({
      // query: () => '/school_subjects',
      query: () => '/school-subject/list/',
      transformResponse: (response: any[]) => {
        return response.map(schoolSubj => SchoolSubject.fromJson(schoolSubj))
      },
      providesTags: ['SchoolSubjects'],
    }),

    getSchoolSubjectById: builder.query<SchoolSubject, string>({
      query: (id: string) => `/school-subject/${id}/`,
      transformResponse: (response: any) => {
        return SchoolSubject.fromJson(response);
      },
      providesTags: ['SchoolSubjectById'],
    }),

    addSchoolSubject: builder.mutation({
      query: (body) => ({
        url: '/school-subject/create/',
        method: 'POST',
        body
      }),
    })

  })

});

export const { useLazyGetSchoolSubjectsQuery, useAddSchoolSubjectMutation } = schoolSubjectsApi;