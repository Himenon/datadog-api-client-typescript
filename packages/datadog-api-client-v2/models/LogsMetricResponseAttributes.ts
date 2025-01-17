/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricResponseCompute } from "./LogsMetricResponseCompute";
import { LogsMetricResponseFilter } from "./LogsMetricResponseFilter";
import { LogsMetricResponseGroupBy } from "./LogsMetricResponseGroupBy";

export class LogsMetricResponseAttributes {
  "compute"?: LogsMetricResponseCompute;
  "filter"?: LogsMetricResponseFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<LogsMetricResponseGroupBy>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    compute: {
      baseName: "compute",
      type: "LogsMetricResponseCompute",
    },
    filter: {
      baseName: "filter",
      type: "LogsMetricResponseFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<LogsMetricResponseGroupBy>",
    },
  };

  static getAttributeTypeMap() {
    return LogsMetricResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
