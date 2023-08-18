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

    addStudent: builder.mutation({
      query: (body) => ({
        url: '/auth/register/students/',
        method: 'POST', 
        body
      })

    }),

    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/student/${id}/`,
        method: 'DELETE'
      }),
    })

  })

});

export const { useLazyGetStudentsQuery, useAddStudentMutation, useDeleteStudentMutation } = studentsApi;