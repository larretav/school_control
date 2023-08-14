import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { PubRoutes } from "@/const/routes.const";
import { logOut, selectAuth } from "@/redux/features/auth/authSlice";
import { layoutReset } from "@/redux/features/layout/layoutSlice";
import { loginReset } from "@/redux/features/login/loginSlice";
import { useLogoutUserMutation } from "@/redux/app/services/auth.service";

export const useLogout = () => {

  const dispatch = useAppDispatch();
  const credentials = useAppSelector(selectAuth);

  const navigate = useNavigate();

  const [userLogout, {isUninitialized, isLoading}] = useLogoutUserMutation();

  const logout = async () => {

    try {
      const logoutResp = await userLogout(credentials.access_token).unwrap();

      console.log(logoutResp);

      // Reset all states
      dispatch(layoutReset);
      dispatch(loginReset);
  
      dispatch(logOut());
      navigate(`/${PubRoutes.LOGIN}`, { replace: true });

    } catch (error) {
      console.log(error);
    }

  }

  return {
    logout,
    isLoading: isLoading
  }
}