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

import { SyntheticsBrowserVariableType } from "./SyntheticsBrowserVariableType";
import { HttpFile } from "../http/http";

/**
 * Object defining a variable that can be used in your browser test. Learn more in the [Browser test Actions documentation](https://docs.datadoghq.com/synthetics/browser_tests/actions#variable).
 */
export class SyntheticsBrowserVariable {
  /**
   * Example for the variable.
   */
  "example"?: string;
  /**
   * ID for the variable.
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

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "example",
      baseName: "example",
      type: "string",
      format: "",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
      format: "",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "pattern",
      baseName: "pattern",
      type: "string",
      format: "",
    },
    {
      name: "type",
      baseName: "type",
      type: "SyntheticsBrowserVariableType",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SyntheticsBrowserVariable.attributeTypeMap;
  }

  public constructor() {}
}