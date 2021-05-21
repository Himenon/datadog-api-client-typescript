/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CheckCanDeleteSLOResponseData } from './CheckCanDeleteSLOResponseData';
/**
* A service level objective response containing the requested object.
*/
export declare class CheckCanDeleteSLOResponse {
    'data'?: CheckCanDeleteSLOResponseData;
    /**
    * A mapping of SLO id to it's current usages.
    */
    'errors'?: {
        [key: string]: string;
    };
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
    }): CheckCanDeleteSLOResponse;
    static serialize(data: CheckCanDeleteSLOResponse): {
        [key: string]: any;
    };
    constructor();
}
