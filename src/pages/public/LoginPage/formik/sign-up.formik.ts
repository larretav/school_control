import * as Yup from 'yup';


const FILE_SIZE = 5 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
];
  
export const getSignUpValidator = (onSubmit: any) => ({
  initialValues: {
    username: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    age: 18,
    gender: '',
    email: '',
    image: undefined,
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
    image: Yup.mixed()
      .required('La imagen es obligatoria').
      test('fileFormat', 'Solo se permiten imagenes.',
        (value: any) => value && SUPPORTED_FORMATS.includes(value?.type))
      .test('fileSize', 'El tamaño máximo de la imagen debe ser de 5MB',
        (value: any) => value && value?.size <= FILE_SIZE)
  }),
  onSubmit: onSubmit
});
