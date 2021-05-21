/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SLOCorrection } from './SLOCorrection';
/**
* A list of  SLO correction objects
*/
export declare class SLOCorrectionListResponse {
    /**
    * The list of of SLO corrections objects
    */
    'data'?: Array<SLOCorrection>;
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
    }): SLOCorrectionListResponse;
    static serialize(data: SLOCorrectionListResponse): {
        [key: string]: any;
    };
    constructor();
}
