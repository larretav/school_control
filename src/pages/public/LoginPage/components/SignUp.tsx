import { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { signupContainer, signupForm } from "./styles/common.style";
import { PersonAddAlt1Rounded } from "@mui/icons-material";
import { getSignUpValidator } from "../formik/sign-up.formik";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
// import { useNavigate } from "react-router-dom";
import { selectProfessionalCareers, setProfessionalCareers, setToggleForm } from "@/redux/features/login/loginSlice";
import Center from "@/components/Center";
import ImageAvatar from "@/components/ImageAvatar";
import { useUploadImageMutation } from "@/redux/app/services/upload-assets.service";
import { IUploadImageBody } from "@/interfaces/upload-image-body";
import { CloudinaryConst } from "@/const/cloudinary.const";
import { ISignUp } from "@/interfaces/sign-up-interface";
import { useLazyGetProfessionalCareerQuery } from "@/redux/app/services/professional-careers.service";
import ProgressIndicator from "@/components/ProgressIndicator";

const SignUp = () => {

  const dispatch = useAppDispatch();

  const profCareers = useAppSelector(selectProfessionalCareers)

  const [uploadImage] = useUploadImageMutation();
  const [getProfCareerQuery, { isUninitialized, isLoading, isFetching }] = useLazyGetProfessionalCareerQuery()

  const handleSubmit = async (values: ISignUp) => {

    try {
      const imageBody: IUploadImageBody = {
        api_key: CloudinaryConst.API_KEY,
        upload_preset: CloudinaryConst.UPLOAD_PRESET,
        folder: CloudinaryConst.FOLDER,
        file: values.image.urlFile
      }

      const uploadImageResp = await uploadImage(imageBody);

      console.log(uploadImageResp);

    } catch (error: any) {
      console.log(error);
    }
  }

  const getProfessionalCareers = async () => {
    try {
      const profCareerResp = await getProfCareerQuery().unwrap();
      dispatch(setProfessionalCareers(profCareerResp))
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik(getSignUpValidator(handleSubmit));

  const handleClickNewAcount = () => dispatch(setToggleForm());

  useEffect(() => {
    getProfessionalCareers();
  }, [])
  

  return (
    <>
      <Box sx={signupContainer} className="shadow-none md:shadow-2xl rounded-none md:rounded-3xl">

        <Box className="w-full h-2/5 bg-teal-800 absolute rounded-none md:rounded-t-3xl " />
        <Box className="w-24 h-24 bg-white opacity-10 absolute rounded-full top-3 left-5" />
        <Box className="w-28 h-28 bg-white opacity-10 absolute rounded-full top-14 left-44" />
        <Box className="w-20 h-20 bg-white opacity-10 absolute rounded-full top-4 right-8" />
        <Box className="w-28 h-28 bg-white opacity-10 absolute rounded-full top-40 left-8" />
        <Box className="w-28 h-28 bg-white opacity-10 absolute rounded-full top-40 right-2" />

        <Stack justifyContent="center" alignItems="center" spacing={2} className="py-5 box-border">
          <Typography variant="h5" textAlign="center" fontWeight={300} className="p-0 m-0 z-10 text-white uppercase">Sistema de control escolar</Typography>
          <PersonAddAlt1Rounded sx={{ color: 'common.white', fontSize: 100, zIndex: 1 }} />

          <Grid container justifyContent="center" alignContent="stretch" spacing={2} component="form" noValidate autoComplete="off" onSubmit={formik.handleSubmit} sx={signupForm} className="rounded-3xl shadow-xl bg-white z-10">

            <Grid item xs={12}>
              <Typography variant="h5" fontWeight={300} textAlign="center">Registro</Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Center >
                <ImageAvatar
                  id="image"
                  value={formik.values.image}
                  onChange={(name, value) => formik.setFieldValue(name, value)}
                  onBlur={formik.handleBlur}
                  error={formik.touched.image && !!formik.errors.image}
                  helperText={formik.touched.image && formik.errors.image}
                />

              </Center>
            </Grid>

            <Grid item xs={12} md={8}>
              <Stack justifyContent="stretch" spacing={2}>
                <TextField
                  id="username"
                  label="Matricula"
                  variant="standard"
                  fullWidth
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.username && formik.errors.username}
                  error={formik.touched.username && Boolean(formik.errors.username)}
                />

                <TextField
                  name="professionalCareer"
                  label="Carrera"
                  variant="standard"
                  fullWidth
                  select
                  value={formik.values.professionalCareer}
                  onChange={(formik.handleChange)}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.professionalCareer && formik.errors.professionalCareer}
                  error={formik.touched.professionalCareer && Boolean(formik.errors.professionalCareer)}
                >
                  {
                    profCareers.map(career => <MenuItem key={career.id} value={career.id} >{career.name}</MenuItem>)
                  }
                </TextField>


              </Stack>
            </Grid>


            <Grid item xs={12} md={6}>

              <TextField
                id="firstName"
                label="Nombre"
                variant="standard"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.firstName && formik.errors.firstName}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              />
            </Grid>
            <Grid item xs={12} md={6}>

              <TextField
                id="lastName"
                label="Apellidos"
                variant="standard"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.lastName && formik.errors.lastName}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                id="age"
                label="Edad"
                variant="standard"
                type="number"
                fullWidth
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.age && formik.errors.age}
                error={formik.touched.age && Boolean(formik.errors.age)}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                name="gender"
                label="Género"
                variant="standard"
                fullWidth
                select
                value={formik.values.gender}
                onChange={(formik.handleChange)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.gender && formik.errors.gender}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
              >
                <MenuItem value="Hombre">Hombre</MenuItem>
                <MenuItem value="Mujer">Mujer</MenuItem>
                <MenuItem value="No binario">No binario</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                id="email"
                label="Correo electrónico"
                variant="standard"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.email && formik.errors.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                id="password"
                label="Contraseña"
                variant="standard"
                type="password"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.password && formik.errors.password}
                error={formik.touched.password && Boolean(formik.errors.password)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                id="passwordConfirm"
                label="Confirmar contraseña"
                variant="standard"
                type="password"
                fullWidth
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
              />
            </Grid>

            <Grid item xs={12} md={3} >
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                className="uppercase"
              >
                Registrarse
              </Button>
            </Grid>

          </Grid>


          <Typography component="div" variant="body1">
            ¿Ya tienes una cuenta?
            <Button
              variant="text"
              className="py-0"
              onClick={handleClickNewAcount}
            >
              Iniciar sesión
            </Button>
          </Typography>

        </Stack>

      </Box>
      <ProgressIndicator isLoading={isLoading} />
    </>
  )
}
export default SignUp