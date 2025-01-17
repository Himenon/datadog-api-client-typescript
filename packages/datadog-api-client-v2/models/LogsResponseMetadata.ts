/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsAggregateResponseStatus } from "./LogsAggregateResponseStatus";
import { LogsResponseMetadataPage } from "./LogsResponseMetadataPage";
import { LogsWarning } from "./LogsWarning";

export class LogsResponseMetadata {
  /**
   * The time elapsed in milliseconds
   */
  "elapsed"?: number;
  "page"?: LogsResponseMetadataPage;
  /**
   * The identifier of the request
   */
  "requestId"?: string;
  "status"?: LogsAggregateResponseStatus;
  /**
   * A list of warnings (non fatal errors) encountered, partial results might be returned if warnings are present in the response.
   */
  "warnings"?: Array<LogsWarning>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    elapsed: {
      baseName: "elapsed",
      type: "number",

      format: "int64",
    },
    page: {
      baseName: "page",
      type: "LogsResponseMetadataPage",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "LogsAggregateResponseStatus",
    },
    warnings: {
      baseName: "warnings",
      type: "Array<LogsWarning>",
    },
  };

  static getAttributeTypeMap() {
    return LogsResponseMetadata.attributeTypeMap;
  }

  public constructor() {}
}
