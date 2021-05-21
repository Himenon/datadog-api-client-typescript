/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { FormulaAndFunctionEventAggregation } from './FormulaAndFunctionEventAggregation';
import { QuerySortOrder } from './QuerySortOrder';
/**
* Options for sorting group by results.
*/
export declare class FormulaAndFunctionEventQueryGroupBySort {
    'aggregation': FormulaAndFunctionEventAggregation;
    /**
    * Metric used for sorting group by results.
    */
    'metric'?: string;
    'order'?: QuerySortOrder;
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
    }): FormulaAndFunctionEventQueryGroupBySort;
    static serialize(data: FormulaAndFunctionEventQueryGroupBySort): {
        [key: string]: any;
    };
    constructor();
}