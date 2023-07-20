import { Box } from "@mui/material"
import SignIn from "./components/SignIn"
import { useAppSelector } from "@/redux/app/hooks"
import { selectCurrentForm } from "@/redux/features/login/loginSlice"
import SignUp from "./components/SignUp"

const LoginPage = () => {

  const currentForm = useAppSelector(selectCurrentForm);

  return (
    <Box className="w-screen h-screen grid place-items-center bg-slate-50">
      {
        currentForm
          ? <SignIn />
          : <SignUp />
      }
    </Box>
  )
}
export default LoginPage