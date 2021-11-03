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
 * Git information.
 */

export class SyntheticsCIBatchMetadataGit {
  /**
   * The branch name.
   */
  "branch"?: string;
  /**
   * The commit SHA.
   */
  "commitSha"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    branch: {
      baseName: "branch",
      type: "string",
      format: "",
    },
    commitSha: {
      baseName: "commitSha",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsCIBatchMetadataGit.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsCIBatchMetadataGit {
    const res = new SyntheticsCIBatchMetadataGit();

    res.branch = ObjectSerializer.deserialize(data.branch, "string", "");

    res.commitSha = ObjectSerializer.deserialize(data.commitSha, "string", "");

    return res;
  }

  static serialize(data: SyntheticsCIBatchMetadataGit): { [key: string]: any } {
    const attributeTypes = SyntheticsCIBatchMetadataGit.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.branch = ObjectSerializer.serialize(data.branch, "string", "");

    res.commitSha = ObjectSerializer.serialize(data.commitSha, "string", "");

    return res;
  }

  public constructor() {}
}
