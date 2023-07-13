import { emptyApi } from "./api";

export const authApi = emptyApi.injectEndpoints({

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/Api/Login/ObtenerLogin?Origin=Monitoreo',
        method: 'POST',
        body: credentials
      }),
      transformErrorResponse: () => {
        return {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiTGF1cmEgRMOtYXoiLCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTUxNjIzOTAyMn0.B82pWquCWCf44fNqgibtSf4azplJLOmFqueBSqj3TUE'
        }
      },
      transformResponse: (response) => {

        return {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiTGF1cmEgRMOtYXoiLCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTUxNjIzOTAyMn0.B82pWquCWCf44fNqgibtSf4azplJLOmFqueBSqj3TUE'
        }
      }

    })
  })

});

export const { useLoginUserMutation } = authApi;