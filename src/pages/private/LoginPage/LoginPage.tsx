import { Lock, Person, PersonPin } from "@mui/icons-material"
import { Box, Button, Checkbox, FormControlLabel, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import SignIn from "./components/SignIn"



const LoginPage = () => {

  


  return (
    <Box className="w-screen h-screen  grid place-items-center bg-slate-50">
      <SignIn/>
    </Box>
  )
}
export default LoginPage