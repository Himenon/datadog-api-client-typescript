/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentServiceCreateAttributes } from "./IncidentServiceCreateAttributes";
import { IncidentServiceRelationships } from "./IncidentServiceRelationships";
import { IncidentServiceType } from "./IncidentServiceType";

export class IncidentServiceCreateData {
  "attributes"?: IncidentServiceCreateAttributes;
  "relationships"?: IncidentServiceRelationships;
  "type": IncidentServiceType;

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
      type: "IncidentServiceCreateAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentServiceRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentServiceType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return IncidentServiceCreateData.attributeTypeMap;
  }

  public constructor() {}
}
