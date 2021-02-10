/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationKeyUpdateAttributes } from "./ApplicationKeyUpdateAttributes";
import { ApplicationKeysType } from "./ApplicationKeysType";
import { HttpFile } from "../http/http";

/**
 * Object used to update an application key.
 */
export class ApplicationKeyUpdateData {
  "attributes": ApplicationKeyUpdateAttributes;
  /**
   * ID of the application key.
   */
  "id": string;
  "type": ApplicationKeysType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "attributes",
      baseName: "attributes",
      type: "ApplicationKeyUpdateAttributes",
      format: "",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
      format: "",
    },
    {
      name: "type",
      baseName: "type",
      type: "ApplicationKeysType",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return ApplicationKeyUpdateData.attributeTypeMap;
  }

  public constructor() {}
}