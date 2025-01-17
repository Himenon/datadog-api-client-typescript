/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBrowserVariableType } from "./SyntheticsBrowserVariableType";

export class SyntheticsBrowserVariable {
  /**
   * Example for the variable.
   */
  "example"?: string;
  /**
   * ID for the variable. Global variables require an ID.
   */
  "id"?: string;
  /**
   * Name of the variable.
   */
  "name": string;
  /**
   * Pattern of the variable.
   */
  "pattern"?: string;
  "type": SyntheticsBrowserVariableType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    example: {
      baseName: "example",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    pattern: {
      baseName: "pattern",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsBrowserVariableType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBrowserVariable.attributeTypeMap;
  }

  public constructor() {}
}
