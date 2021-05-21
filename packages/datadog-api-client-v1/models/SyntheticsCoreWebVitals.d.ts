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
* Core Web Vitals attached to a browser test step.
*/
export declare class SyntheticsCoreWebVitals {
    /**
    * Cumulative Layout Shift.
    */
    'cls'?: number;
    /**
    * Largest Contentful Paint in milliseconds.
    */
    'lcp'?: number;
    /**
    * URL attached to the metrics.
    */
    'url'?: string;
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
    }): SyntheticsCoreWebVitals;
    static serialize(data: SyntheticsCoreWebVitals): {
        [key: string]: any;
    };
    constructor();
}
