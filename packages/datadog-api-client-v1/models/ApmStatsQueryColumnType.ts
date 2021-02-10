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

import { TableWidgetCellDisplayMode } from "./TableWidgetCellDisplayMode";
import { WidgetSort } from "./WidgetSort";
import { HttpFile } from "../http/http";

/**
 * Column properties.
 */
export class ApmStatsQueryColumnType {
  /**
   * A user-assigned alias for the column.
   */
  "alias"?: string;
  "cellDisplayMode"?: TableWidgetCellDisplayMode;
  /**
   * Column name.
   */
  "name": string;
  "order"?: WidgetSort;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "alias",
      baseName: "alias",
      type: "string",
      format: "",
    },
    {
      name: "cellDisplayMode",
      baseName: "cell_display_mode",
      type: "TableWidgetCellDisplayMode",
      format: "",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "order",
      baseName: "order",
      type: "WidgetSort",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return ApmStatsQueryColumnType.attributeTypeMap;
  }

  public constructor() {}
}