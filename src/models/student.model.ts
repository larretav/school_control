
export default class Student {

  constructor(
    public id: number,
    public semester: string | null,
    public user: User,
    public professionalCareer: ProfessionalCareer,
    public schoolGroup: string,
    public schoolSubjects: SchoolSubject[]
    ) { }

  static fromJson(obj: { [key: string]: any }) {
    return new Student(
      obj["id"],
      obj["semester"],
      User.fromJson(obj["user"]),
      ProfessionalCareer.fromJson(obj["career"]),
      obj["school_group"],
      obj["school_subjects"].map( (subject: any) => SchoolSubject.fromJson(subject) )
    )
  }
}


class User {
  constructor(
    public id: number,
    public username: string,
    public fullName: string,
    public email: string,
    public photoUrl: string,
    public gender: string,
    public emailValidation: boolean,
    public status: boolean
  ) { }

  static fromJson(obj: { [key: string]: any }) {
    return new User(
      obj["id"],
      obj["username"],
      obj["full_name"],
      obj["email"],
      obj["photo_url"],
      obj["gender"],
      obj["email_validation"],
      obj["status"]
    )
  }
}

class ProfessionalCareer {
  constructor(
    public id: number,
    public name: string
  ) { }

  static fromJson(obj: { [key: string]: any }) {
    return new ProfessionalCareer(
      obj["id"],
      obj["name"]
    )
  }
}

class SchoolSubject {
  constructor(
    public id: number,
    public name: string
  ) { }

  static fromJson(obj: { [key: string]: any }) {
    return new SchoolSubject(
      obj["id"],
      obj["name"]
    )
  }
}