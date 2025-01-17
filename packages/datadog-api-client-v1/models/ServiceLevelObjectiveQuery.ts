/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class ServiceLevelObjectiveQuery {
  /**
   * A Datadog metric query for total (valid) events.
   */
  "denominator": string;
  /**
   * A Datadog metric query for good events.
   */
  "numerator": string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    denominator: {
      baseName: "denominator",
      type: "string",
      required: true,
    },
    numerator: {
      baseName: "numerator",
      type: "string",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return ServiceLevelObjectiveQuery.attributeTypeMap;
  }

  public constructor() {}
}
