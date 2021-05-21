/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SyntheticsGlobalVariableParseTestOptionsType } from './SyntheticsGlobalVariableParseTestOptionsType';
import { SyntheticsVariableParser } from './SyntheticsVariableParser';
/**
* Parser options to use for retrieving a Synthetics global variable from a Synthetics Test. Used in conjunction with `parse_test_public_id`.
*/
export declare class SyntheticsGlobalVariableParseTestOptions {
    /**
    * When type is `http_header`, name of the header to use to extract the value.
    */
    'field'?: string;
    'parser': SyntheticsVariableParser;
    'type': SyntheticsGlobalVariableParseTestOptionsType;
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
    }): SyntheticsGlobalVariableParseTestOptions;
    static serialize(data: SyntheticsGlobalVariableParseTestOptions): {
        [key: string]: any;
    };
    constructor();
}
