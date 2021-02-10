/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityMonitoringRuleQueryAggregation } from "./SecurityMonitoringRuleQueryAggregation";
import { HttpFile } from "../http/http";

/**
 * Query for matching rule.
 */
export class SecurityMonitoringRuleQuery {
  "aggregation"?: SecurityMonitoringRuleQueryAggregation;
  /**
   * Field for which the cardinality is measured. Sent as an array.
   */
  "distinctFields"?: Array<string>;
  /**
   * Fields to group by.
   */
  "groupByFields"?: Array<string>;
  /**
   * The target field to aggregate over when using the sum or max aggregations.
   */
  "metric"?: string;
  /**
   * Name of the query.
   */
  "name"?: string;
  /**
   * Query to run on logs.
   */
  "query"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "aggregation",
      baseName: "aggregation",
      type: "SecurityMonitoringRuleQueryAggregation",
      format: "",
    },
    {
      name: "distinctFields",
      baseName: "distinctFields",
      type: "Array<string>",
      format: "",
    },
    {
      name: "groupByFields",
      baseName: "groupByFields",
      type: "Array<string>",
      format: "",
    },
    {
      name: "metric",
      baseName: "metric",
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
      name: "query",
      baseName: "query",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SecurityMonitoringRuleQuery.attributeTypeMap;
  }

  public constructor() {}
}