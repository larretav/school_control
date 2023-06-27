import { Navigate, Outlet } from 'react-router-dom';
import { LocalStorageConst } from '@/const/local-storage.const';
import { selectAuth } from '@/redux/features/auth/authSlice';
import { getLocalStorage } from '../utils/local-storage.utils';
import { PubRoutes } from '@/const/routes.const';
import { useAppSelector } from '@/redux/app/hooks';

const AuthRoutes = () => {

  const userAuth = useAppSelector(selectAuth);
  const userAuthLS = getLocalStorage(LocalStorageConst.CREDENTIALS);


  const isAuth = userAuth.token || userAuthLS ? true : false;

  return isAuth ? <Outlet /> : <Navigate replace to={PubRoutes.LOGIN} />
}

export default AuthRoutes