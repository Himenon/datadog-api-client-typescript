/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SLOHistoryMetricsSeriesMetadataUnit } from './SLOHistoryMetricsSeriesMetadataUnit';
/**
* Query metadata.
*/
export declare class SLOHistoryMetricsSeriesMetadata {
    /**
    * Query aggregator function.
    */
    'aggr'?: string;
    /**
    * Query expression.
    */
    'expression'?: string;
    /**
    * Query metric used.
    */
    'metric'?: string;
    /**
    * Query index from original combined query.
    */
    'queryIndex'?: number;
    /**
    * Query scope.
    */
    'scope'?: string;
    /**
    * An array of metric units that contains up to two unit objects. For example, bytes represents one unit object and bytes per second represents two unit objects. If a metric query only has one unit object, the second array element is null.
    */
    'unit'?: Array<SLOHistoryMetricsSeriesMetadataUnit>;
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
    }): SLOHistoryMetricsSeriesMetadata;
    static serialize(data: SLOHistoryMetricsSeriesMetadata): {
        [key: string]: any;
    };
    constructor();
}
