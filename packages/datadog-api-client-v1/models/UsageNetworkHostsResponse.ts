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

import { UsageNetworkHostsHour } from "./UsageNetworkHostsHour";
import { HttpFile } from "../http/http";

/**
 * Response containing the number of active NPM hosts for each hour for a given organization.
 */
export class UsageNetworkHostsResponse {
  /**
   * Get hourly usage for NPM hosts.
   */
  "usage"?: Array<UsageNetworkHostsHour>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "usage",
      baseName: "usage",
      type: "Array<UsageNetworkHostsHour>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return UsageNetworkHostsResponse.attributeTypeMap;
  }

  public constructor() {}
}