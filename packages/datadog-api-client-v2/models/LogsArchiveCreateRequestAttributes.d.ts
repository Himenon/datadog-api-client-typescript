/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LogsArchiveCreateRequestDestination } from './LogsArchiveCreateRequestDestination';
/**
* The attributes associated with the archive.
*/
export declare class LogsArchiveCreateRequestAttributes {
    'destination': LogsArchiveCreateRequestDestination;
    /**
    * To store the tags in the archive, set the value \"true\". If it is set to \"false\", the tags will be deleted when the logs are sent to the archive.
    */
    'includeTags'?: boolean;
    /**
    * The archive name.
    */
    'name': string;
    /**
    * The archive query/filter. Logs matching this query are included in the archive.
    */
    'query': string;
    /**
    * An array of tags to add to rehydrated logs from an archive.
    */
    'rehydrationTags'?: Array<string>;
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
    }): LogsArchiveCreateRequestAttributes;
    static serialize(data: LogsArchiveCreateRequestAttributes): {
        [key: string]: any;
    };
    constructor();
}
