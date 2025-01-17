/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { SecurityMonitoringRuleResponse } from "./SecurityMonitoringRuleResponse";

export class SecurityMonitoringListRulesResponse {
  /**
   * Array containing the list of rules.
   */
  "data"?: Array<SecurityMonitoringRuleResponse>;
  "meta"?: ResponseMetaAttributes;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    data: {
      baseName: "data",
      type: "Array<SecurityMonitoringRuleResponse>",
    },
    meta: {
      baseName: "meta",
      type: "ResponseMetaAttributes",
    },
  };

  static getAttributeTypeMap() {
    return SecurityMonitoringListRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
