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
* The attributes associated with the archive order.
*/
export declare class LogsArchiveOrderAttributes {
    /**
    * An ordered array of `<ARCHIVE_ID>` strings, the order of archive IDs in the array define the overall archives order for Datadog.
    */
    'archiveIds': Array<string>;
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
    }): LogsArchiveOrderAttributes;
    static serialize(data: LogsArchiveOrderAttributes): {
        [key: string]: any;
    };
    constructor();
}