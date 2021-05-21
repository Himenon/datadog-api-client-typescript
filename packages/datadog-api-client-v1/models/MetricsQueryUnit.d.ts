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
* Object containing the metric unit family, scale factor, name, and short name.
*/
export declare class MetricsQueryUnit {
    /**
    * Unit family, allows for conversion between units of the same family, for scaling.
    */
    'family'?: string;
    /**
    * Unit name
    */
    'name'?: string;
    /**
    * Plural form of the unit name.
    */
    'plural'?: string;
    /**
    * Factor for scaling between units of the same family.
    */
    'scaleFactor'?: number;
    /**
    * Abbreviation of the unit.
    */
    'shortName'?: string;
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
    }): MetricsQueryUnit;
    static serialize(data: MetricsQueryUnit): {
        [key: string]: any;
    };
    constructor();
}
