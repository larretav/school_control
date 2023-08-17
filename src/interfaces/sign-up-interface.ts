import { FileObj } from "./image-avatar.interface";

export interface ISignUp {
  username: string,
  password: string,
  passwordConfirm: string,
  firstName: string,
  lastName: string,
  age: string,
  gender: string,
  email: string,
  professionalCareer: number,
  image: FileObj
}