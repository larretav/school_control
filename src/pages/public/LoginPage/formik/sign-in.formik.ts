import { FormEvent } from 'react';
import * as Yup from 'yup';

export const getSignInValidator = (onSubmit: any) => ({
  initialValues: {
    username: '',
    password: '',
    remember: true
  },
  validationSchema: Yup.object({
    username: Yup.string()
      .required('El nombre de usuario es obligatorio'),
    password: Yup.string()
      .required('La contraseña es obligatoria'),
    remember: Yup.bool()
  }),
  onSubmit: onSubmit
});
