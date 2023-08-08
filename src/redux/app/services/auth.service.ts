import { emptyApi } from "./api";

export const authApi = emptyApi.injectEndpoints({

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login/',
        method: 'POST',
        body: credentials,
      }),

      // transformErrorResponse: () => {
      //   return {
      //     access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiTGF1cmEgRMOtYXoiLCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTUxNjIzOTAyMn0.B82pWquCWCf44fNqgibtSf4azplJLOmFqueBSqj3TUE'
      //   }
      // },
      // transformResponse: (response) => {

      //   return {
      //     access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiTGF1cmEgRMOtYXoiLCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTUxNjIzOTAyMn0.B82pWquCWCf44fNqgibtSf4azplJLOmFqueBSqj3TUE'
      //   }
      // }
    }),

    logoutUser: builder.mutation({
      query: (access_token: string) => ({
        url: '/auth/logout/',
        method: 'POST',
        body: {
          token: access_token
        }
      })
    })
  })

});

export const { useLoginUserMutation, useLogoutUserMutation } = authApi;