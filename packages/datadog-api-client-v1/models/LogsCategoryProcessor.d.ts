/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LogsCategoryProcessorCategory } from './LogsCategoryProcessorCategory';
import { LogsCategoryProcessorType } from './LogsCategoryProcessorType';
/**
* Use the Category Processor to add a new attribute (without spaces or special characters in the new attribute name) to a log matching a provided search query. Use categories to create groups for an analytical view. For example, URL groups, machine groups, environments, and response time buckets.  **Notes**:  - The syntax of the query is the one of Logs Explorer search bar.   The query can be done on any log attribute or tag, whether it is a facet or not.   Wildcards can also be used inside your query. - Once the log has matched one of the Processor queries, it stops.   Make sure they are properly ordered in case a log could match several queries. - The names of the categories must be unique. - Once defined in the Category Processor, you can map categories to log status using the Log Status Remapper.
*/
export declare class LogsCategoryProcessor {
    /**
    * Array of filters to match or not a log and their corresponding `name`to assign a custom value to the log.
    */
    'categories': Array<LogsCategoryProcessorCategory>;
    /**
    * Whether or not the processor is enabled.
    */
    'isEnabled'?: boolean;
    /**
    * Name of the processor.
    */
    'name'?: string;
    /**
    * Name of the target attribute which value is defined by the matching category.
    */
    'target': string;
    'type': LogsCategoryProcessorType;
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
    }): LogsCategoryProcessor;
    static serialize(data: LogsCategoryProcessor): {
        [key: string]: any;
    };
    constructor();
}
