import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { LocalStorageConst } from '@/const/local-storage.const';
import { getLocalStorage } from '@/utils/local-storage.utils';

export const emptyApi = createApi({

  reducerPath: 'emptyApi',

  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:8011/',
    baseUrl: 'http://localhost:4000/api',
    prepareHeaders: (headers, {getState }) => {
      
      let token = (getState() as RootState).auth.remember
        ? JSON.parse(getLocalStorage( LocalStorageConst.CREDENTIALS )).access_token
        : (getState() as RootState).auth.access_token

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;

    }
  }),

  endpoints: () => ({})
  
});


// CLOUDINARY
export const emptyApiCloudinary = createApi({

  reducerPath: 'emptyApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.cloudinary.com/v1_1/dwzkbzepk',
    prepareHeaders: (headers, {getState }) => {
      
      

      return headers;

    }
  }),

  endpoints: () => ({})
  
});