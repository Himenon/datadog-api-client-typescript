/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { APIKeyUpdateAttributes } from './APIKeyUpdateAttributes';
import { APIKeysType } from './APIKeysType';
/**
* Object used to update an API key.
*/
export declare class APIKeyUpdateData {
    'attributes': APIKeyUpdateAttributes;
    /**
    * ID of the API key.
    */
    'id': string;
    'type': APIKeysType;
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
    }): APIKeyUpdateData;
    static serialize(data: APIKeyUpdateData): {
        [key: string]: any;
    };
    constructor();
}
