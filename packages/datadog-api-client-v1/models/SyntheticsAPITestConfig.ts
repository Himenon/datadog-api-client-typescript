/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAPIStep } from "./SyntheticsAPIStep";
import { SyntheticsAssertion } from "./SyntheticsAssertion";
import { SyntheticsConfigVariable } from "./SyntheticsConfigVariable";
import { SyntheticsTestRequest } from "./SyntheticsTestRequest";

export class SyntheticsAPITestConfig {
  /**
   * Array of assertions used for the test. Required for single API tests.
   */
  "assertions"?: Array<SyntheticsAssertion>;
  /**
   * Array of variables used for the test.
   */
  "configVariables"?: Array<SyntheticsConfigVariable>;
  "request"?: SyntheticsTestRequest;
  /**
   * When the test subtype is `multi`, the steps of the test.
   */
  "steps"?: Array<SyntheticsAPIStep>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    assertions: {
      baseName: "assertions",
      type: "Array<SyntheticsAssertion>",
    },
    configVariables: {
      baseName: "configVariables",
      type: "Array<SyntheticsConfigVariable>",
    },
    request: {
      baseName: "request",
      type: "SyntheticsTestRequest",
    },
    steps: {
      baseName: "steps",
      type: "Array<SyntheticsAPIStep>",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsAPITestConfig.attributeTypeMap;
  }

  public constructor() {}
}
