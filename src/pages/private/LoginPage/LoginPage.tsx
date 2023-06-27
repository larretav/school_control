import { CheckBox, Lock, Person, PersonPin, PersonPinCircleTwoTone } from "@mui/icons-material"
import { Box, Button, Checkbox, FormControlLabel, InputAdornment, Stack, TextField, Typography } from "@mui/material"

type Props = {}

const LoginPage = (props: Props) => {

  const startIconUser = {
    startAdornment: (
      <InputAdornment position="start">
        <Person color="primary" />
      </InputAdornment>
    ),
  }

  const startIconPassword = {
    startAdornment: (
      <InputAdornment position="start">
        <Lock color="primary" />
      </InputAdornment>
    ),
  }


  return (
    <Box className="w-screen h-screen  grid place-items-center bg-slate-50">
      <Box className="w-1/4 h-5/6 relative shadow-2xl rounded-3xl bg-gray-100">
        
        <Box className="w-full h-1/3 bg-blue-800 absolute rounded-t-3xl" />
        <Box className="w-24 h-24 bg-white opacity-10 absolute rounded-full top-3 left-5" />
        <Box className="w-28 h-28 bg-white opacity-10 absolute rounded-full top-14 left-44" />
        <Box className="w-20 h-20 bg-white opacity-10 absolute rounded-full top-4 right-8" />
        <Box className="w-28 h-28 bg-white opacity-10 absolute rounded-full top-40 left-8" />
        <Box className="w-28 h-28 bg-white opacity-10 absolute rounded-full top-40 right-2" />

        <Stack justifyContent="center" alignItems="center" spacing={4} className="py-10 box-border">
          <PersonPin sx={{ color: 'common.white', fontSize: 100, zIndex: 1 }} />
          <Stack spacing={3} sx={{zIndex: 2 }} className="py-6 px-12 rounded-3xl shadow-xl bg-white">
            <Typography variant="h6" textAlign="center">Iniciar sesión</Typography>
            <TextField
              fullWidth
              InputProps={startIconUser}
              label="Usuario *"
              variant="standard"
            />

            <TextField
              fullWidth
              InputProps={startIconPassword}
              label="Contraseña *"
              variant="standard"
            />

            <FormControlLabel
              control={<Checkbox
                id="remember"
                color="secondary"
              />}
              label="Recuérdame"
            />
            <Button
              fullWidth
            >
              Ingresar
            </Button>
          </Stack>
          <Typography variant="body1" className="pt-4" >Crear una nueva cuenta</Typography>

        </Stack>

      </Box>
    </Box>
  )
}
export default LoginPage