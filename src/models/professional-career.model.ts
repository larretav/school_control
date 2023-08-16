export default class ProfessionalCareer {

  constructor(
    public id: number,
    public schoolSubjects: SchoolSubject[],
    public createdAt: string,
    public updatedAt: string,
    public programNumber: number,
    public name: string,
    public numberSemesters: number,
    public status: boolean
  ) { }

  static fromJson(obj: { [key: string]: any }) {
    return new ProfessionalCareer(
      obj["id"],
      obj["school_subjects"].map((schoolSubj: any) => SchoolSubject.fromJson(schoolSubj)),
      obj["created"],
      obj["modified"],
      obj["program_number"],
      obj["name"],
      obj["number_semesters"],
      obj["status"],
    )
  }
  // constructor(
  //   public id: string,
  //   public createdAt: string,
  //   public updatedAt: string,
  //   public programNumber: number,
  //   public name: string,
  //   public numberSemesters: string,
  //   public status: string
  // ) { }

  // static fromJson(obj: { [key: string]: any }) {
  //   return new ProfessionalCareer(
  //     obj["id"],
  //     obj["createdAt"],
  //     obj["updatedAt"],
  //     obj["programNumber"],
  //     obj["name"],
  //     obj["numberSemesters"],
  //     obj["status"],
  //   )
  // }

}

class SchoolSubject {

  constructor(
    public id: number,
    public createdAt: string,
    public updatedAt: string,
    public name: string,
    public semester: number,
    public status: boolean
  ) { }

  static fromJson(obj: { [key: string]: any }) {
    return new SchoolSubject(
      obj["id"],
      obj["created"],
      obj["modified"],
      obj["name"],
      obj["semester"],
      obj["status"],
    )
  }
}
