/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LogsAggregateResponseData } from './LogsAggregateResponseData';
import { LogsResponseMetadata } from './LogsResponseMetadata';
/**
* The response object for the logs aggregate API endpoint
*/
export declare class LogsAggregateResponse {
    'data'?: LogsAggregateResponseData;
    'meta'?: LogsResponseMetadata;
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
    }): LogsAggregateResponse;
    static serialize(data: LogsAggregateResponse): {
        [key: string]: any;
    };
    constructor();
}
