/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentCreateAttributes } from "./IncidentCreateAttributes";
import { IncidentCreateRelationships } from "./IncidentCreateRelationships";
import { IncidentType } from "./IncidentType";

export class IncidentCreateData {
  "attributes": IncidentCreateAttributes;
  "relationships"?: IncidentCreateRelationships;
  "type": IncidentType;

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
      type: "IncidentCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentCreateRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return IncidentCreateData.attributeTypeMap;
  }

  public constructor() {}
}
