/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsGlobalVariableAttributes } from "./SyntheticsGlobalVariableAttributes";
import { SyntheticsGlobalVariableParseTestOptions } from "./SyntheticsGlobalVariableParseTestOptions";
import { SyntheticsGlobalVariableValue } from "./SyntheticsGlobalVariableValue";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Synthetics global variable.
 */

export class SyntheticsGlobalVariable {
  "attributes"?: SyntheticsGlobalVariableAttributes;
  /**
   * Description of the global variable.
   */
  "description": string;
  /**
   * Unique identifier of the global variable.
   */
  "id"?: string;
  /**
   * Name of the global variable.
   */
  "name": string;
  "parseTestOptions"?: SyntheticsGlobalVariableParseTestOptions;
  /**
   * A Synthetic test ID to use as a test to generate the variable value.
   */
  "parseTestPublicId"?: string;
  /**
   * Tags of the global variable.
   */
  "tags": Array<string>;
  "value": SyntheticsGlobalVariableValue;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "SyntheticsGlobalVariableAttributes",
      format: "",
    },
    description: {
      baseName: "description",
      type: "string",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    parseTestOptions: {
      baseName: "parse_test_options",
      type: "SyntheticsGlobalVariableParseTestOptions",
      format: "",
    },
    parseTestPublicId: {
      baseName: "parse_test_public_id",
      type: "string",
      format: "",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
    value: {
      baseName: "value",
      type: "SyntheticsGlobalVariableValue",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsGlobalVariable.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SyntheticsGlobalVariable {
    const res = new SyntheticsGlobalVariable();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "SyntheticsGlobalVariableAttributes",
      ""
    );

    if (data.description === undefined) {
      throw new TypeError(
        "missing required attribute 'description' on 'SyntheticsGlobalVariable' object"
      );
    }
    res.description = ObjectSerializer.deserialize(
      data.description,
      "string",
      ""
    );

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'SyntheticsGlobalVariable' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.parseTestOptions = ObjectSerializer.deserialize(
      data.parse_test_options,
      "SyntheticsGlobalVariableParseTestOptions",
      ""
    );

    res.parseTestPublicId = ObjectSerializer.deserialize(
      data.parse_test_public_id,
      "string",
      ""
    );

    if (data.tags === undefined) {
      throw new TypeError(
        "missing required attribute 'tags' on 'SyntheticsGlobalVariable' object"
      );
    }
    res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "");

    if (data.value === undefined) {
      throw new TypeError(
        "missing required attribute 'value' on 'SyntheticsGlobalVariable' object"
      );
    }
    res.value = ObjectSerializer.deserialize(
      data.value,
      "SyntheticsGlobalVariableValue",
      ""
    );

    return res;
  }

  static serialize(data: SyntheticsGlobalVariable): { [key: string]: any } {
    const attributeTypes = SyntheticsGlobalVariable.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "SyntheticsGlobalVariableAttributes",
      ""
    );

    if (data.description === undefined) {
      throw new TypeError(
        "missing required attribute 'description' on 'SyntheticsGlobalVariable' object"
      );
    }
    res.description = ObjectSerializer.serialize(
      data.description,
      "string",
      ""
    );

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'SyntheticsGlobalVariable' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.parse_test_options = ObjectSerializer.serialize(
      data.parseTestOptions,
      "SyntheticsGlobalVariableParseTestOptions",
      ""
    );

    res.parse_test_public_id = ObjectSerializer.serialize(
      data.parseTestPublicId,
      "string",
      ""
    );

    if (data.tags === undefined) {
      throw new TypeError(
        "missing required attribute 'tags' on 'SyntheticsGlobalVariable' object"
      );
    }
    res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "");

    if (data.value === undefined) {
      throw new TypeError(
        "missing required attribute 'value' on 'SyntheticsGlobalVariable' object"
      );
    }
    res.value = ObjectSerializer.serialize(
      data.value,
      "SyntheticsGlobalVariableValue",
      ""
    );

    return res;
  }

  public constructor() {}
}
