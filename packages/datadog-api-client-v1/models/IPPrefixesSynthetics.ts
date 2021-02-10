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
 * Available prefix information for the Synthetics endpoints.
 */
export class IPPrefixesSynthetics {
  /**
   * List of IPv4 prefixes.
   */
  "prefixesIpv4"?: Array<string>;
  /**
   * List of IPv4 prefixes by location.
   */
  "prefixesIpv4ByLocation"?: { [key: string]: Array<string> };
  /**
   * List of IPv6 prefixes.
   */
  "prefixesIpv6"?: Array<string>;
  /**
   * List of IPv6 prefixes by location.
   */
  "prefixesIpv6ByLocation"?: { [key: string]: Array<string> };

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "prefixesIpv4",
      baseName: "prefixes_ipv4",
      type: "Array<string>",
      format: "",
    },
    {
      name: "prefixesIpv4ByLocation",
      baseName: "prefixes_ipv4_by_location",
      type: "{ [key: string]: Array<string>; }",
      format: "",
    },
    {
      name: "prefixesIpv6",
      baseName: "prefixes_ipv6",
      type: "Array<string>",
      format: "",
    },
    {
      name: "prefixesIpv6ByLocation",
      baseName: "prefixes_ipv6_by_location",
      type: "{ [key: string]: Array<string>; }",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return IPPrefixesSynthetics.attributeTypeMap;
  }

  public constructor() {}
}