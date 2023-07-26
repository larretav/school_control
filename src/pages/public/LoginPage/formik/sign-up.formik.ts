import { FileObj } from '@/interfaces/image-avatar.interface';
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
    image: null,
    username: '',
    professionalCareer: '',
    firstName: '',
    lastName: '',
    age: 18,
    gender: '',
    email: '',
    password: '',
    passwordConfirm: '',
  },
  validationSchema: Yup.object({
    image: Yup.mixed()
      .required('La imagen es obligatoria').
      test('fileFormat', 'Solo se permiten imagenes.',
        (value) => value && SUPPORTED_FORMATS.includes((value as FileObj).type))
      .test('fileSize', 'El tamaño máximo de la imagen debe ser de 5MB',
        (value) => value && (value as FileObj).size <= FILE_SIZE),

    username: Yup.string()
      .required('La matricula es obligatoria'),
    professionalCareer: Yup.string(),
    firstName: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('El apellido es obligatorio'),
    age: Yup.number()
      .required('La edad es obligatoria'),
    gender: Yup.string(),
    email: Yup.string()
      .email('Correo no válido')
      .required('El correo electrónico es obligatorio'),

    password: Yup.string()
      .required('La contraseña es obligatoria')
      .min(8, 'La contraseña debe ser de 8 caracteres')
      .max(8, 'El password debe ser de 8 caracteres'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
      .required('Es obligatorio confirmar la contraseña'),
  }),
  onSubmit: onSubmit
});
