/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
* Git information.
*/
export declare class SyntheticsCITestMetadataGit {
    /**
    * Branch name.
    */
    'branch'?: string;
    /**
    * Commit SHA.
    */
    'commitSha'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: {
        [key: string]: {
            baseName: string;
            type: string;
            format: string;
        };
    };
    static getAttributeTypeMap(): {
        [key: string]: {
            baseName: string;
            type: string;
            format: string;
        };
    };
    static deserialize(data: {
        [key: string]: any;
    }): SyntheticsCITestMetadataGit;
    static serialize(data: SyntheticsCITestMetadataGit): {
        [key: string]: any;
    };
    constructor();
}
