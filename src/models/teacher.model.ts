
export default class Teacher {

  constructor(
    public id: number,
    public user: User,
    public schoolGroups: SchoolGroup[],
    public schoolSubjects: SchoolSubject[]
  ) { }

  static fromJson(obj: { [key: string]: any }) {
    return new Teacher(
      obj["id"],
      User.fromJson(obj["user"]),
      obj["school_groups"].map((group: any) => SchoolGroup.fromJson(group)),
      obj["school_subjects"].map((subject: any) => SchoolSubject.fromJson(subject))
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


class SchoolGroup {
  constructor(
    public id: number,
    public createdAt: string,
    public updatedAt: string,
    public groupNumber: number,
    public schoolYear: number,
    public status: number,
  ) { }

  static fromJson(obj: { [key: string]: any }) {
    return new SchoolGroup(
      obj["id"],
      obj["created"],
      obj["modified"],
      obj["group_number"],
      obj["school_year"],
      obj["status"],
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