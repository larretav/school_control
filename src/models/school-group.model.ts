// import ProfessionalCareer from "./professional-career.model";

export default class SchoolGroup {

  constructor(
    public id: string,
    public createdAt: string,
    public updatedAt: string,
    public groupNumber: string,
    public schoolYear: string,
    public status: string,
  ) { }

  static fromJson(obj: Record<string, any>) {
    return new SchoolGroup(
      obj["id"],
      obj["created"],
      obj["modified"],
      obj["group_number"],
      obj["school_year"],
      obj["status"]
    )
  }
}
