import { emptyApi } from "./api";
import Student from "@/models/student.model";


const apiWithTag = emptyApi.enhanceEndpoints({ addTagTypes: ['Students'] })

export const studentsApi = apiWithTag.injectEndpoints({

  endpoints: (builder) => ({
    getStudents: builder.query<Student[], void>({
      query: () => '/student/list/',
      transformResponse: (response: any[]) => {
        return response.map(student => Student.fromJson(student))
      },
      providesTags: ['Students'],
    }),


  })

});

export const { useLazyGetStudentsQuery } = studentsApi;