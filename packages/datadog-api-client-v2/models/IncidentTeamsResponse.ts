/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentServicesResponseMeta } from "./IncidentServicesResponseMeta";
import { IncidentTeamIncludedItems } from "./IncidentTeamIncludedItems";
import { IncidentTeamResponseData } from "./IncidentTeamResponseData";

export class IncidentTeamsResponse {
  /**
   * An array of incident teams.
   */
  "data": Array<IncidentTeamResponseData>;
  /**
   * Included related resources which the user requested.
   */
  "included"?: Array<IncidentTeamIncludedItems>;
  "meta"?: IncidentServicesResponseMeta;

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
      type: "Array<IncidentTeamResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentTeamIncludedItems>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentServicesResponseMeta",
    },
  };

  static getAttributeTypeMap() {
    return IncidentTeamsResponse.attributeTypeMap;
  }

  public constructor() {}
}
