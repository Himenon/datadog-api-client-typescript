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
* The hourly usage of timeseries.
*/
export declare class UsageTimeseriesHour {
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
    }): UsageTimeseriesHour;
    static serialize(data: UsageTimeseriesHour): {
        [key: string]: any;
    };
    constructor();
}