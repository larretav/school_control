import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { LocalStorageConst } from '@/const/local-storage.const';
import { getLocalStorage } from '@/utils/local-storage.utils';

export const emptyApi = createApi({

  reducerPath: 'emptyApi',

  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://api.qapkt1i.cf/',
    baseUrl: 'http://localhost:8011/',
    prepareHeaders: (headers, {getState }) => {
      
      let token = (getState() as RootState).auth.remember
        ? JSON.parse(getLocalStorage( LocalStorageConst.CREDENTIALS )).access_token
        : (getState() as RootState).auth.token

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;

    }
  }),

  endpoints: () => ({})
  
});