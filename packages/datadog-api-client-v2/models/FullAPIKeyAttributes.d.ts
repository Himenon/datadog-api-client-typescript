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
* Attributes of a full API key.
*/
export declare class FullAPIKeyAttributes {
    /**
    * Creation date of the API key.
    */
    'createdAt'?: string;
    /**
    * The API key.
    */
    'key'?: string;
    /**
    * The last four characters of the API key.
    */
    'last4'?: string;
    /**
    * Date the API key was last modified.
    */
    'modifiedAt'?: string;
    /**
    * Name of the API key.
    */
    'name'?: string;
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
    }): FullAPIKeyAttributes;
    static serialize(data: FullAPIKeyAttributes): {
        [key: string]: any;
    };
    constructor();
}
