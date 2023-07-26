import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocalStorageConst } from '@/const/local-storage.const';
import { RootState } from '@/redux/app/store';
import { removeLocalStorage, setLocalStorage, getLocalStorage } from '@/utils/local-storage.utils';
import { LoginResponse } from '@/interfaces/login-resp';

interface IAuth {
  access_token: string,
  expires_in: number,
  refresh_token: string,
}

const initialState: IAuth = {
  access_token: '',
  expires_in: 0,
  refresh_token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: getLocalStorage(LocalStorageConst.CREDENTIALS).length != 0 ? JSON.parse(getLocalStorage(LocalStorageConst.CREDENTIALS)) : initialState,
  reducers: {

    setCredentials: (state, action: PayloadAction<LoginResponse>) => {
      const { scope, token_type, ...credentials } = action.payload;

      state.access_token = credentials.access_token;
      state.expires_in = credentials.expires_in;
      state.refresh_token = credentials.refresh_token;

      setLocalStorage(LocalStorageConst.CREDENTIALS, credentials)
    },

    logOut: (state, _) => {
      state.user = null;
      state.token = null;
      state.remember = null;

      removeLocalStorage(LocalStorageConst.CREDENTIALS);

    }
  }
})

export const { setCredentials, logOut } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export const selectUserData = (state: RootState) => state.auth.token;

export default authSlice.reducer;
