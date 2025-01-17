/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricTagConfigurationAttributes } from "./MetricTagConfigurationAttributes";
import { MetricTagConfigurationType } from "./MetricTagConfigurationType";

export class MetricTagConfiguration {
  "attributes"?: MetricTagConfigurationAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  "type"?: MetricTagConfigurationType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    attributes: {
      baseName: "attributes",
      type: "MetricTagConfigurationAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricTagConfigurationType",
    },
  };

  static getAttributeTypeMap() {
    return MetricTagConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
