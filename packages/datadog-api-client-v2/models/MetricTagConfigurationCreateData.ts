/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricTagConfigurationCreateAttributes } from "./MetricTagConfigurationCreateAttributes";
import { MetricTagConfigurationType } from "./MetricTagConfigurationType";

export class MetricTagConfigurationCreateData {
  "attributes"?: MetricTagConfigurationCreateAttributes;
  /**
   * The metric name for this resource.
   */
  "id": string;
  "type": MetricTagConfigurationType;

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
      type: "MetricTagConfigurationCreateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricTagConfigurationType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return MetricTagConfigurationCreateData.attributeTypeMap;
  }

  public constructor() {}
}
