/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsStringBuilderProcessorType } from "./LogsStringBuilderProcessorType";

export class LogsStringBuilderProcessor {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * If true, it replaces all missing attributes of `template` by an empty string. If `false` (default), skips the operation for missing attributes.
   */
  "isReplaceMissing"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * The name of the attribute that contains the result of the template.
   */
  "target": string;
  /**
   * A formula with one or more attributes and raw text.
   */
  "template": string;
  "type": LogsStringBuilderProcessorType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    isReplaceMissing: {
      baseName: "is_replace_missing",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    template: {
      baseName: "template",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsStringBuilderProcessorType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return LogsStringBuilderProcessor.attributeTypeMap;
  }

  public constructor() {}
}
