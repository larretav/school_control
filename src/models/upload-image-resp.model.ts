import ProfessionalCareer from "./professional-career.model";

export default class UploadImageResp {

  constructor(
    public assetId: string,
    public publicId: string,
    public version: number,
    public versionId: string,
    public signature: string,
    public width: number,
    public height: number,
    public format: string,
    public resourceType: string,
    public createdAt: string,
    public tags: string,
    public bytes: number,
    public type: string,
    public eTag: string,
    public placeholder: string,
    public url: string,
    public secureUrl: string,
    public folder: string,
    public accessMode: string,
  ) { }

  static fromJson(obj: { [key: string]: any }) {
    return new UploadImageResp(
      obj["asset_id"],
      obj["public_id"],
      obj["version"],
      obj["version_id"],
      obj["signature"],
      obj["width"],
      obj["height"],
      obj["format"],
      obj["resource_type"],
      obj["created_at"],
      obj["tags"],
      obj["bytes"],
      obj["type"],
      obj["etag"],
      obj["placeholder"],
      obj["url"],
      obj["secure_url"],
      obj["folder"],
      obj["access_mode"],
    )
  }

}
