/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SLOCorrectionResponseAttributes } from './SLOCorrectionResponseAttributes';
import { SLOCorrectionType } from './SLOCorrectionType';
/**
* The response object of a list of SLO corrections
*/
export declare class SLOCorrection {
    'attributes'?: SLOCorrectionResponseAttributes;
    /**
    * The ID of the SLO correction
    */
    'id'?: string;
    'type'?: SLOCorrectionType;
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
    }): SLOCorrection;
    static serialize(data: SLOCorrection): {
        [key: string]: any;
    };
    constructor();
}
