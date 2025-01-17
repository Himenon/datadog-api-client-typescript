/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsErrorCode } from "./SyntheticsErrorCode";
import { SyntheticsSSLCertificate } from "./SyntheticsSSLCertificate";
import { SyntheticsTestProcessStatus } from "./SyntheticsTestProcessStatus";
import { SyntheticsTiming } from "./SyntheticsTiming";

export class SyntheticsAPITestResultData {
  "cert"?: SyntheticsSSLCertificate;
  "errorCode"?: SyntheticsErrorCode;
  /**
   * The API test error message.
   */
  "errorMessage"?: string;
  "eventType"?: SyntheticsTestProcessStatus;
  /**
   * The API test HTTP status code.
   */
  "httpStatusCode"?: number;
  /**
   * Request header object used for the API test.
   */
  "requestHeaders"?: { [key: string]: any };
  /**
   * Response body returned for the API test.
   */
  "responseBody"?: string;
  /**
   * Response headers returned for the API test.
   */
  "responseHeaders"?: { [key: string]: any };
  /**
   * Global size in byte of the API test response.
   */
  "responseSize"?: number;
  "timings"?: SyntheticsTiming;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    cert: {
      baseName: "cert",
      type: "SyntheticsSSLCertificate",
    },
    errorCode: {
      baseName: "errorCode",
      type: "SyntheticsErrorCode",
    },
    errorMessage: {
      baseName: "errorMessage",
      type: "string",
    },
    eventType: {
      baseName: "eventType",
      type: "SyntheticsTestProcessStatus",
    },
    httpStatusCode: {
      baseName: "httpStatusCode",
      type: "number",

      format: "int64",
    },
    requestHeaders: {
      baseName: "requestHeaders",
      type: "{ [key: string]: any; }",
    },
    responseBody: {
      baseName: "responseBody",
      type: "string",
    },
    responseHeaders: {
      baseName: "responseHeaders",
      type: "{ [key: string]: any; }",
    },
    responseSize: {
      baseName: "responseSize",
      type: "number",

      format: "int64",
    },
    timings: {
      baseName: "timings",
      type: "SyntheticsTiming",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsAPITestResultData.attributeTypeMap;
  }

  public constructor() {}
}
