import { IStudentBody } from "@/interfaces/student-body.interface";

export const initUsersData: IStudentBody[] = [
  {
    userKey: 'yakasawa',
    password: 'yaka1234',
    firstName: 'Jesús',
    lastName: 'de Chamberí',
    email: 'yaka@gmail.com',
    gender: 'hombre',
    birthdate: '1995-10-11',
    photoUrl: 'https://res.cloudinary.com/dwzkbzepk/image/upload/v1652135443/44-442954_trolls-movie-party-branch-blue-troll-from-trolls_gfvgcg.png',
    professionalCareer: 0
  },
  {
    userKey: 'larretav',
    password: '123tamarindo',
    firstName: 'Alejandro',
    lastName: 'Larreta',
    email: 'admin@admin.com',
    gender: 'hombre',
    birthdate: '1995-10-11',
    photoUrl: 'https://res.cloudinary.com/dwzkbzepk/image/upload/v1652135443/44-442954_trolls-movie-party-branch-blue-troll-from-trolls_gfvgcg.png',
    professionalCareer: 0
  },
  {
    userKey: 'laurad',
    password: 'laurad',
    firstName: 'Laura',
    lastName: 'Díaz',
    email: 'laura@gmail.com',
    gender: 'no binario',
    birthdate: '1995-10-11',
    photoUrl: 'https://res.cloudinary.com/dwzkbzepk/image/upload/v1652135443/44-442954_trolls-movie-party-branch-blue-troll-from-trolls_gfvgcg.png',
    professionalCareer: 0
  },
]

const obj = {

  userKey: 'Se conforma de las primeras tres letras de la propiedad firstName, después las primeras 3 letras de la propiedad lastName y 6 numeros aleatorios (todo en minusculas)',
  password: 'Se conforma de las primeras 4 letras de la propiedad firstName seguido de 4 números aleatorios (todo en minusculas)',
  firstName: 'Un nombre mexicano aleatorio',
  lastName: 'Dos apellido mexicano aleatorio',
  email: 'Se conforma de las primeras 4 letras de la propiedad firstName seguido de un guión bajo seguido de las primeras 4 letras de la propiedad lastName sguido de "@gmail.com"  (todo en minusculas)',
  gender: 'Puede tomar un valor entre M, F o X',
  birthdate: 'una fecha aleatoria menor al 2006 en formato dd/mm/yyyy',
  photoUrl: 'Campo vacío',
  professionalCareer: 'un número aleatorio entre 0 y 2',

}