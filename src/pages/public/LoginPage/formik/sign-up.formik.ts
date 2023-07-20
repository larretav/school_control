import * as Yup from 'yup';

export const getSignUpValidator = (onSubmit: any) => ({
  initialValues: {
    username: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    email: '',
  },
  validationSchema: Yup.object({
    username: Yup.string()
      .required('La matricula es obligatoria'),
    password: Yup.string()
      .required('La contraseña es obligatoria')
      .min(8, 'La contraseña debe ser de 8 caracteres')
      .max(8, 'El password debe ser de 8 caracteres'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
      .required('Es obligatorio confirmar la contraseña'),
    firstName: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('El apellido es obligatorio'),
    age: Yup.number()
      .required('La edad es obligatoria'),
    gender: Yup.string(),
    email: Yup.string()
      .email('Correo no válido')
      .required('El correo electrónico es obligatorio'),
  }),
  onSubmit: onSubmit
});
