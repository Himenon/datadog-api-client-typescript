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
* X Axis controls for the distribution widget.
*/
export declare class DistributionWidgetXAxis {
    /**
    * True includes zero.
    */
    'includeZero'?: boolean;
    /**
    * Specifies maximum value to show on the x-axis. It takes a number, percentile (p90 === 90th percentile), or auto for default behavior.
    */
    'max'?: string;
    /**
    * Specifies minimum value to show on the x-axis. It takes a number, percentile (p90 === 90th percentile), or auto for default behavior.
    */
    'min'?: string;
    /**
    * Specifies the scale type. Possible values are `linear`.
    */
    'scale'?: string;
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
    }): DistributionWidgetXAxis;
    static serialize(data: DistributionWidgetXAxis): {
        [key: string]: any;
    };
    constructor();
}
