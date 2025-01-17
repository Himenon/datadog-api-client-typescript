/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class SLOListResponseMetadataPage {
  /**
   * The total number of resources that could be retrieved ignoring the parameters and filters in the request.
   */
  "totalCount"?: number;
  /**
   * The total number of resources that match the parameters and filters in the request. This attribute can be used by a client to determine the total number of pages.
   */
  "totalFilteredCount"?: number;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    totalCount: {
      baseName: "total_count",
      type: "number",

      format: "int64",
    },
    totalFilteredCount: {
      baseName: "total_filtered_count",
      type: "number",

      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return SLOListResponseMetadataPage.attributeTypeMap;
  }

  public constructor() {}
}
