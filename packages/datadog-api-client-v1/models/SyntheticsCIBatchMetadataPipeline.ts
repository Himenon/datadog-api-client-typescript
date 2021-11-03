/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Description of the CI pipeline.
 */

export class SyntheticsCIBatchMetadataPipeline {
  /**
   * URL of the pipeline.
   */
  "url"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    url: {
      baseName: "url",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsCIBatchMetadataPipeline.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsCIBatchMetadataPipeline {
    const res = new SyntheticsCIBatchMetadataPipeline();

    res.url = ObjectSerializer.deserialize(data.url, "string", "");

    return res;
  }

  static serialize(data: SyntheticsCIBatchMetadataPipeline): {
    [key: string]: any;
  } {
    const attributeTypes =
      SyntheticsCIBatchMetadataPipeline.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.url = ObjectSerializer.serialize(data.url, "string", "");

    return res;
  }

  public constructor() {}
}
