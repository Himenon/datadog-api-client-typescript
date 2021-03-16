/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricComputeAggregationType } from './LogsMetricComputeAggregationType';
import { HttpFile } from '../http/http';

/**
* The compute rule to compute the log-based metric.
*/
export class LogsMetricCompute {
    'aggregationType': LogsMetricComputeAggregationType;
    /**
    * The path to the value the log-based metric will aggregate on (only used if the aggregation type is a \"distribution\").
    */
    'path'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aggregationType",
            "baseName": "aggregation_type",
            "type": "LogsMetricComputeAggregationType",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsMetricCompute.attributeTypeMap;
    }
    
    public constructor() {
    }
}
