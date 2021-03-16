/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* The hourly usage of timeseries.
*/
export class UsageTimeseriesHour {
    /**
    * The hour for the usage.
    */
    'hour'?: Date;
    /**
    * Contains the number of custom metrics that are inputs for aggregations (metric configured is custom).
    */
    'numCustomInputTimeseries'?: number;
    /**
    * Contains the number of custom metrics that are outputs for aggregations (metric configured is custom).
    */
    'numCustomOutputTimeseries'?: number;
    /**
    * Contains the number of non-aggregation custom metrics.
    */
    'numCustomTimeseries'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hour",
            "baseName": "hour",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "numCustomInputTimeseries",
            "baseName": "num_custom_input_timeseries",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numCustomOutputTimeseries",
            "baseName": "num_custom_output_timeseries",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "numCustomTimeseries",
            "baseName": "num_custom_timeseries",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return UsageTimeseriesHour.attributeTypeMap;
    }
    
    public constructor() {
    }
}
