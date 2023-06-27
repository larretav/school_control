import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageConst } from '@/const/local-storage.const';
import { RootState } from '@/redux/app/store';
import { removeLocalStorage, setLocalStorage, getLocalStorage } from '@/utils/local-storage.utils';

interface IAuth {
  user: string,
  token: string,
  remember: boolean
}

const initialState: IAuth = {
  user: '',
  token: '',
  remember: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: getLocalStorage(LocalStorageConst.CREDENTIALS).length != 0 ? JSON.parse(getLocalStorage(LocalStorageConst.CREDENTIALS)) : initialState,
  reducers: {

    setCredentials: (state, action) => {
      const { user, token, remember } = action.payload;
      state.user = user;
      state.token = token;

      if (remember) return setLocalStorage(LocalStorageConst.CREDENTIALS, { user, token });
    },

    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      state.remember = null;

      removeLocalStorage(LocalStorageConst.CREDENTIALS);

    }
  }
})

export const { setCredentials, logOut } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
