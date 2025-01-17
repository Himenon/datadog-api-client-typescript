/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UsageRumUnitsHour {
  /**
   * Number of browser RUM lite sessions.
   */
  "browserRumLiteSessionCount"?: number;
  /**
   * Number of browser RUM replay sessions.
   */
  "browserRumReplaySessionCount"?: number;
  /**
   * The number of browser RUM units.
   */
  "browserRumUnits"?: number;
  /**
   * Number of mobile RUM lite sessions.
   */
  "mobileRumLiteSessionCount"?: number;
  /**
   * The number of mobile RUM units.
   */
  "mobileRumUnits"?: number;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * Total RUM units across mobile and browser RUM.
   */
  "rumUnits"?: number;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    browserRumLiteSessionCount: {
      baseName: "browser_rum_lite_session_count",
      type: "number",

      format: "int64",
    },
    browserRumReplaySessionCount: {
      baseName: "browser_rum_replay_session_count",
      type: "number",

      format: "int64",
    },
    browserRumUnits: {
      baseName: "browser_rum_units",
      type: "number",

      format: "int64",
    },
    mobileRumLiteSessionCount: {
      baseName: "mobile_rum_lite_session_count",
      type: "number",

      format: "int64",
    },
    mobileRumUnits: {
      baseName: "mobile_rum_units",
      type: "number",

      format: "int64",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    rumUnits: {
      baseName: "rum_units",
      type: "number",

      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageRumUnitsHour.attributeTypeMap;
  }

  public constructor() {}
}
