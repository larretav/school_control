import Teacher from "@/models/teacher.model";
import { emptyApi } from "./api";
import Student from "@/models/student.model";


const apiWithTag = emptyApi.enhanceEndpoints({ addTagTypes: ['Teachers'] })

export const teachersApi = apiWithTag.injectEndpoints({

  endpoints: (builder) => ({
    getTeachers: builder.query<Teacher[], void>({
      query: () => '/teacher/list/',
      transformResponse: (response: any[]) => {
        return response.map(teacher => Teacher.fromJson(teacher))
      },
      providesTags: ['Teachers'],
    }),

    addTeacher: builder.mutation({
      query: (body) => ({
        url: '/teacher/create/',
        method: 'POST',
        body
      }),
    }),

    deleteTeacher: builder.mutation({
      query: (id) => ({
        url: `/teacher/${id}/`,
        method: 'DELETE'
      }),
    })

  })

});

export const { useLazyGetTeachersQuery, useAddTeacherMutation, useDeleteTeacherMutation } = teachersApi;