/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class LogsGroupByHistogram {
  /**
   * The bin size of the histogram buckets
   */
  "interval": number;
  /**
   * The maximum value for the measure used in the histogram (values greater than this one are filtered out)
   */
  "max": number;
  /**
   * The minimum value for the measure used in the histogram (values smaller than this one are filtered out)
   */
  "min": number;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    interval: {
      baseName: "interval",
      type: "number",
      required: true,
      format: "double",
    },
    max: {
      baseName: "max",
      type: "number",
      required: true,
      format: "double",
    },
    min: {
      baseName: "min",
      type: "number",
      required: true,
      format: "double",
    },
  };

  static getAttributeTypeMap() {
    return LogsGroupByHistogram.attributeTypeMap;
  }

  public constructor() {}
}
