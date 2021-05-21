/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SLOCorrectionCategory } from './SLOCorrectionCategory';
/**
* The attribute object associated with the SLO correction to be updated
*/
export declare class SLOCorrectionUpdateRequestAttributes {
    'category'?: SLOCorrectionCategory;
    /**
    * Description of the correction being made.
    */
    'description'?: string;
    /**
    * Ending time of the correction in epoch seconds
    */
    'end'?: number;
    /**
    * Starting time of the correction in epoch seconds
    */
    'start'?: number;
    /**
    * The timezone to display in the UI for the correction times (defaults to \"UTC\")
    */
    'timezone'?: string;
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
    }): SLOCorrectionUpdateRequestAttributes;
    static serialize(data: SLOCorrectionUpdateRequestAttributes): {
        [key: string]: any;
    };
    constructor();
}
