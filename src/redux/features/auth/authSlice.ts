import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocalStorageConst } from '@/const/local-storage.const';
import { RootState } from '@/redux/app/store';
import { removeLocalStorage, setLocalStorage, getLocalStorage } from '@/utils/local-storage.utils';

interface IAuth {
  user: string,
  name: string,
  role: string,
  token: string,
  remember: boolean
}

const initialState: IAuth = {
  user: '',
  name: '',
  role: '',
  token: '',
  remember: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: getLocalStorage(LocalStorageConst.CREDENTIALS).length != 0 ? JSON.parse(getLocalStorage(LocalStorageConst.CREDENTIALS)) : initialState,
  reducers: {

    setCredentials: (state, action) => {
      const { user, tokenData, remember } = action.payload;
      state.user = user;
      state.name = tokenData.user;
      state.role = tokenData.role;
      state.token = tokenData.token;

      if (remember) return setLocalStorage(LocalStorageConst.CREDENTIALS, { user, ...tokenData });
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
