import { emptyApiCloudinary } from "./api";
import { IUploadImageBody } from "@/interfaces/upload-image-body";
import UploadImageResp from "@/models/upload-image-resp.model";


const apiWithTag = emptyApiCloudinary.enhanceEndpoints({ addTagTypes: ['UploadImageResp'] })

export const uploadAssetsApi = apiWithTag.injectEndpoints({

  endpoints: (builder) => ({
    uploadImage: builder.mutation<UploadImageResp, IUploadImageBody>({
      query: (body) => ({
        url: '/auto/upload',
        method: 'POST',
        body,
      }),
      transformResponse: (response: any) => {
        return UploadImageResp.fromJson(response)
      },
    }),

    

  })

});

export const { useUploadImageMutation } = uploadAssetsApi;