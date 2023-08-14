import SchoolSubject from "@/models/school-subject.model";
import { emptyApi } from "./api";


const apiWithTag = emptyApi.enhanceEndpoints({ addTagTypes: ['SchoolSubjects'] })

export const schoolSubjectsApi = apiWithTag.injectEndpoints({

  endpoints: (builder) => ({
    getSchoolSubjects: builder.query<SchoolSubject[], void>({
      query: () => '/school_subjects',
      // query: () => '/school-subject/list/',
      transformResponse: (response: any[]) => {
        return response.map(schoolSubj => SchoolSubject.fromJson(schoolSubj))
      },
      providesTags: ['SchoolSubjects'],
    }),

    getSchoolSubjectById: builder.query<any, string>({
      query: (id: string) => `/school_subjects/${id}`,
      transformResponse: (response: any) => {
        return SchoolSubject.fromJson(response);
      },
      providesTags: ['SchoolSubjects'],
    }),

  })

});

export const { useLazyGetSchoolSubjectsQuery, useLazyGetSchoolSubjectByIdQuery } = schoolSubjectsApi;