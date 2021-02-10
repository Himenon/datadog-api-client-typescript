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

import { ApmStatsQueryColumnType } from "./ApmStatsQueryColumnType";
import { ApmStatsQueryRowType } from "./ApmStatsQueryRowType";
import { HttpFile } from "../http/http";

/**
 * The APM stats query for table and distributions widgets.
 */
export class ApmStatsQueryDefinition {
  /**
   * Column properties used by the front end for display.
   */
  "columns"?: Array<ApmStatsQueryColumnType>;
  /**
   * Environment name.
   */
  "env": string;
  /**
   * Operation name associated with service.
   */
  "name": string;
  /**
   * The organization's host group name and value.
   */
  "primaryTag": string;
  /**
   * Resource name.
   */
  "resource"?: string;
  "rowType": ApmStatsQueryRowType;
  /**
   * Service name.
   */
  "service": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "columns",
      baseName: "columns",
      type: "Array<ApmStatsQueryColumnType>",
      format: "",
    },
    {
      name: "env",
      baseName: "env",
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
      name: "primaryTag",
      baseName: "primary_tag",
      type: "string",
      format: "",
    },
    {
      name: "resource",
      baseName: "resource",
      type: "string",
      format: "",
    },
    {
      name: "rowType",
      baseName: "row_type",
      type: "ApmStatsQueryRowType",
      format: "",
    },
    {
      name: "service",
      baseName: "service",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return ApmStatsQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}