import { Lock, Person, PersonPin } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, InputAdornment, Stack, SxProps, TextField, Typography } from "@mui/material";

const SignIn = () => {

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

  const signinContainer: SxProps = {
    width: { xs: '100%', md: '50%', xl: '30%' },
    height: { xs: '100%', md: 'auto'},
    position: 'relative',
    bgcolor: 'grey.100'
  }

  const signinForm: SxProps = {
    py: {xs: 3},
    px: {xs: 5, md: 6},
    zIndex: 2 
  }

  return (
    <Box sx={signinContainer} className="shadow-none md:shadow-2xl rounded-none md:rounded-3xl">

      <Box className="w-full h-2/5 bg-blue-800 absolute rounded-none md:rounded-t-3xl " />
      <Box className="w-24 h-24 bg-white opacity-10 absolute rounded-full top-3 left-5" />
      <Box className="w-28 h-28 bg-white opacity-10 absolute rounded-full top-14 left-44" />
      <Box className="w-20 h-20 bg-white opacity-10 absolute rounded-full top-4 right-8" />
      <Box className="w-28 h-28 bg-white opacity-10 absolute rounded-full top-40 left-8" />
      <Box className="w-28 h-28 bg-white opacity-10 absolute rounded-full top-40 right-2" />

      <Stack justifyContent="center" alignItems="center" spacing={4} className="py-10 box-border">
        <PersonPin sx={{ color: 'common.white', fontSize: 130, zIndex: 1 }} />
        <Stack spacing={3} sx={signinForm} className="rounded-3xl shadow-xl bg-white">
          <Typography variant="h6" textAlign="center">Iniciar sesión</Typography>
          <TextField
            label="Usuario *"
            variant="standard"
            InputProps={startIconUser}
            fullWidth
          />

          <TextField
            label="Contraseña *"
            variant="standard"
            type="password"
            InputProps={startIconPassword}
            fullWidth
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
            INGRESAR
          </Button>
        </Stack>
        <Typography variant="body1" className="pt-4" >Crear una nueva cuenta</Typography>

      </Stack>

    </Box>
  )
}

export default SignIn;