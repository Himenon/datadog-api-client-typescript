/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricResponseComputeAggregationType } from "./LogsMetricResponseComputeAggregationType";

export class LogsMetricResponseCompute {
  "aggregationType"?: LogsMetricResponseComputeAggregationType;
  /**
   * The path to the value the log-based metric will aggregate on (only used if the aggregation type is a \"distribution\").
   */
  "path"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    aggregationType: {
      baseName: "aggregation_type",
      type: "LogsMetricResponseComputeAggregationType",
    },
    path: {
      baseName: "path",
      type: "string",
    },
  };

  static getAttributeTypeMap() {
    return LogsMetricResponseCompute.attributeTypeMap;
  }

  public constructor() {}
}
