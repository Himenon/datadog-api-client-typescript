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
* The object containing the aggregates.
*/
export class UsageAttributionAggregatesBody {
    /**
    * The aggregate type.
    */
    'aggType'?: string;
    /**
    * The field.
    */
    'field'?: string;
    /**
    * The value for a given field.
    */
    'value'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aggType",
            "baseName": "agg_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return UsageAttributionAggregatesBody.attributeTypeMap;
    }
    
    public constructor() {
    }
}
