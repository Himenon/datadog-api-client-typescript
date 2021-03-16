/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageTracingWithoutLimitsHour } from './UsageTracingWithoutLimitsHour';
import { HttpFile } from '../http/http';

/**
* Response containing the tracing without limits usage for each hour for a given organization.
*/
export class UsageTracingWithoutLimitsResponse {
    /**
    * Get hourly usage for tracing without limits.
    */
    'usage'?: Array<UsageTracingWithoutLimitsHour>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "usage",
            "baseName": "usage",
            "type": "Array<UsageTracingWithoutLimitsHour>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsageTracingWithoutLimitsResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}
