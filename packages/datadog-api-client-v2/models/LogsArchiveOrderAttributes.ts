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

import { HttpFile } from "../http/http";

/**
 * The attributes associated with the archive order.
 */
export class LogsArchiveOrderAttributes {
  /**
   * An ordered array of `<ARCHIVE_ID>` strings, the order of archive IDs in the array define the overall archives order for Datadog.
   */
  "archiveIds": Array<string>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "archiveIds",
      baseName: "archive_ids",
      type: "Array<string>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsArchiveOrderAttributes.attributeTypeMap;
  }

  public constructor() {}
}