/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class HostMetrics {
  /**
   * The percent of CPU used (everything but idle).
   */
  "cpu"?: number;
  /**
   * The percent of CPU spent waiting on the IO (not reported for all platforms).
   */
  "iowait"?: number;
  /**
   * The system load over the last 15 minutes.
   */
  "load"?: number;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    cpu: {
      baseName: "cpu",
      type: "number",

      format: "double",
    },
    iowait: {
      baseName: "iowait",
      type: "number",

      format: "double",
    },
    load: {
      baseName: "load",
      type: "number",

      format: "double",
    },
  };

  static getAttributeTypeMap() {
    return HostMetrics.attributeTypeMap;
  }

  public constructor() {}
}
