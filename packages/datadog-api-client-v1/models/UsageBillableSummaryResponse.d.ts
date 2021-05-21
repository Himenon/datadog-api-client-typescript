/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UsageBillableSummaryHour } from './UsageBillableSummaryHour';
/**
* Response with monthly summary of data billed by Datadog.
*/
export declare class UsageBillableSummaryResponse {
    /**
    * An array of objects regarding usage of billable summary.
    */
    'usage'?: Array<UsageBillableSummaryHour>;
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
    }): UsageBillableSummaryResponse;
    static serialize(data: UsageBillableSummaryResponse): {
        [key: string]: any;
    };
    constructor();
}