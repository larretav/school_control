import { useLoginUserMutation } from "@/redux/app/services/auth.service";
import { Lock, Person, PersonPin } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, InputAdornment, Stack, SxProps, TextField, Typography } from "@mui/material";
// import { ChangeEvent,  useState } from "react";
import { getSignInValidator } from "../formik/sign-in.formik";
import { ISignIn } from "@/interfaces/sign-in-interface";
import jwt_decode from "jwt-decode";
import { useFormik } from "formik";
import { FormEvent } from "react";
import { setCredentials } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/app/hooks";
import { useNavigate } from "react-router-dom";
import { PrivRoutes } from "@/const/routes.const";

const SignIn = () => {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  // const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleSubmit = async (values: ISignIn) => {

    let decodeToken;

    try {
      // const credentials = {
      //   user: values.username,
      //   password: values.password,
      //   correo
      // }

      const cred = {
        "NombreUsuario": "jorgeFrausto",
        "pass": "abc12345"
      }
      const tokenResp = await loginUser(cred).unwrap();
      decodeToken = jwt_decode(tokenResp?.access_token);


      // dispatch(setCredentials({ user, token, remember }));

      // navigate(`/${PrivatesRoutes.AUTH}`, {replace: true});

    } catch (error:any) {
      decodeToken = jwt_decode(error?.access_token);
    }

    dispatch(setCredentials({ user: values.username, token: decodeToken, remember: values.remember }));

    navigate(`/${PrivRoutes.AUTH}`, {replace: true});
  }

  const formik = useFormik(getSignInValidator(handleSubmit));

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
    height: { xs: '100%', md: 'auto' },
    position: 'relative',
    bgcolor: 'grey.100'
  }

  const signinForm: SxProps = {
    py: { xs: 3 },
    px: { xs: 5, md: 6 },
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
        <Stack component="form" noValidate autoComplete="off" onSubmit={formik.handleSubmit} spacing={3} sx={signinForm} className="rounded-3xl shadow-xl bg-white">
          <Typography variant="h6" textAlign="center">Iniciar sesión</Typography>
          <TextField
            id="username"
            label="Usuario *"
            variant="standard"
            InputProps={startIconUser}
            fullWidth
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.username && formik.errors.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
          />

          <TextField
            id="password"
            label="Contraseña *"
            variant="standard"
            type="password"
            InputProps={startIconPassword}
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />

          <FormControlLabel
            control={<Checkbox
              id="remember"
              color="secondary"
            />}
            label="Recuérdame"
          />
          <Button
            type="submit"
            variant="contained"
            className="rounded-xl uppercase"
          >
            Iniciar Sesión
          </Button>
        </Stack>
        <Typography variant="body1" className="pt-4" >Crear una nueva cuenta</Typography>

      </Stack>

    </Box>
  )
}

export default SignIn;