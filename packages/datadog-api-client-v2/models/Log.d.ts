/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LogAttributes } from './LogAttributes';
import { LogType } from './LogType';
/**
* Object description of a log after being processed and stored by Datadog.
*/
export declare class Log {
    'attributes'?: LogAttributes;
    /**
    * Unique ID of the Log.
    */
    'id'?: string;
    'type'?: LogType;
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
    }): Log;
    static serialize(data: Log): {
        [key: string]: any;
    };
    constructor();
}
