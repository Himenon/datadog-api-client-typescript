/**
 * Datadog API V1 Collection
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
 * A list of current AWS services for which Datadog offers automatic log collection.
 */
export class AWSLogsServicesRequest {
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId": string;
  /**
   * Array of services IDs set to enable automatic log collection. Discover the list of available services with the get list of AWS log ready services API endpoint.
   */
  "services": Array<string>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "accountId",
      baseName: "account_id",
      type: "string",
      format: "",
    },
    {
      name: "services",
      baseName: "services",
      type: "Array<string>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return AWSLogsServicesRequest.attributeTypeMap;
  }

  public constructor() {}
}