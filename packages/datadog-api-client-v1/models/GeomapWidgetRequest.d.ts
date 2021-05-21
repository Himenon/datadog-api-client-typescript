/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { FormulaAndFunctionQueryDefinition } from './FormulaAndFunctionQueryDefinition';
import { FormulaAndFunctionResponseFormat } from './FormulaAndFunctionResponseFormat';
import { LogQueryDefinition } from './LogQueryDefinition';
import { WidgetFormula } from './WidgetFormula';
/**
* An updated geomap widget.
*/
export declare class GeomapWidgetRequest {
    /**
    * List of formulas that operate on queries. **This feature is currently in beta.**
    */
    'formulas'?: Array<WidgetFormula>;
    'logQuery'?: LogQueryDefinition;
    /**
    * The widget metrics query.
    */
    'q'?: string;
    /**
    * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
    */
    'queries'?: Array<FormulaAndFunctionQueryDefinition>;
    'responseFormat'?: FormulaAndFunctionResponseFormat;
    'rumQuery'?: LogQueryDefinition;
    'securityQuery'?: LogQueryDefinition;
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
    }): GeomapWidgetRequest;
    static serialize(data: GeomapWidgetRequest): {
        [key: string]: any;
    };
    constructor();
}
