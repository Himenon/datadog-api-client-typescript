/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AWSLogsAsyncError } from './AWSLogsAsyncError';
/**
* A list of all Datadog-AWS logs integrations available in your Datadog organization.
*/
export declare class AWSLogsAsyncResponse {
    /**
    * List of errors.
    */
    'errors'?: Array<AWSLogsAsyncError>;
    /**
    * Status of the properties.
    */
    'status'?: string;
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
    }): AWSLogsAsyncResponse;
    static serialize(data: AWSLogsAsyncResponse): {
        [key: string]: any;
    };
    constructor();
}