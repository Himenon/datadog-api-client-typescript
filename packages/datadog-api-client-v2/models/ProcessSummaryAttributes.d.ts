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
* Attributes for a process summary.
*/
export declare class ProcessSummaryAttributes {
    /**
    * Process command line.
    */
    'cmdline'?: string;
    /**
    * Host running the process.
    */
    'host'?: string;
    /**
    * Process ID.
    */
    'pid'?: number;
    /**
    * Parent process ID.
    */
    'ppid'?: number;
    /**
    * Time the process was started.
    */
    'start'?: string;
    /**
    * List of tags associated with the process.
    */
    'tags'?: Array<string>;
    /**
    * Time the process was seen.
    */
    'timestamp'?: string;
    /**
    * Process owner.
    */
    'user'?: string;
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
    }): ProcessSummaryAttributes;
    static serialize(data: ProcessSummaryAttributes): {
        [key: string]: any;
    };
    constructor();
}
