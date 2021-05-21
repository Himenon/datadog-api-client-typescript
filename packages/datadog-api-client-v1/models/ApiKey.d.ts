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
* Datadog API key.
*/
export declare class ApiKey {
    /**
    * Date of creation of the API key.
    */
    'created'?: string;
    /**
    * Datadog user handle that created the API key.
    */
    'createdBy'?: string;
    /**
    * API key.
    */
    'key'?: string;
    /**
    * Name of your API key.
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
    }): ApiKey;
    static serialize(data: ApiKey): {
        [key: string]: any;
    };
    constructor();
}
