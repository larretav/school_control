// import ProfessionalCareer from "./professional-career.model";

export default class SchoolSubject {

  constructor(
    public id: number,
    public createdAt: string,
    public updatedAt: string,
    public name: string,
    public semester: number,
    public status: boolean,
    public professionalCareer: ProfessionalCareer,
  ) { }

  static fromJson(obj: { [key: string]: any }) {
    return new SchoolSubject(
      obj["id"],
      obj["created"],
      obj["modified"],
      obj["name"],
      obj["semester"],
      obj["status"],
      ProfessionalCareer.fromJson(obj['career'])
    )
  }
  // constructor(
  //   public id: string,
  //   public createdAt: string,
  //   public updatedAt: string,
  //   public subjectKey: number,
  //   public name: string,
  //   public semester: number,
  //   public status: string,
  //   public professionalCareer: ProfessionalCareer,
  // ) { }

  // static fromJson(obj: { [key: string]: any }) {
  //   return new SchoolSubject(
  //     obj['id'],
  //     obj['createdAt'],
  //     obj['updatedAt'],
  //     obj['subjectKey'],
  //     obj['name'],
  //     obj['semester'],
  //     obj['status'],
  //     ProfessionalCareer.fromJson(obj['professionalCareer'])
  //   )
  // }

}


class ProfessionalCareer {

  constructor(
    public id: number,
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
      obj["created"],
      obj["modified"],
      obj["program_number"],
      obj["name"],
      obj["number_semesters"],
      obj["status"]
    )
  }
}