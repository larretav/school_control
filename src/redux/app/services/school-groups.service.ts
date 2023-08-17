import { emptyApi } from "./api";
import SchoolGroup from "@/models/school-group.model";


const apiWithTag = emptyApi.enhanceEndpoints({ addTagTypes: ['SchoolGroups'] })

export const schoolGroupsApi = apiWithTag.injectEndpoints({

  endpoints: (builder) => ({
    getSchoolGroups: builder.query<SchoolGroup[], void>({
      // query: () => '/school_subjects',
      query: () => '/school-group/list/',
      transformResponse: (response: any[]) => {
        return response.map(group => SchoolGroup.fromJson(group))
      },
      providesTags: ['SchoolGroups'],
    }),

    addSchoolGroup: builder.mutation({
      query: (body) => ({
        url: '/school-group/create/',
        method: 'POST',
        body
      }),
    })

  })

});

export const { useLazyGetSchoolGroupsQuery, useAddSchoolGroupMutation } = schoolGroupsApi;