/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UsageIngestedSpansHour } from './UsageIngestedSpansHour';
/**
* Response containing the ingested spans usage for each hour for a given organization.
*/
export declare class UsageIngestedSpansResponse {
    /**
    * Get hourly usage for ingested spans.
    */
    'usage'?: Array<UsageIngestedSpansHour>;
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
    }): UsageIngestedSpansResponse;
    static serialize(data: UsageIngestedSpansResponse): {
        [key: string]: any;
    };
    constructor();
}
