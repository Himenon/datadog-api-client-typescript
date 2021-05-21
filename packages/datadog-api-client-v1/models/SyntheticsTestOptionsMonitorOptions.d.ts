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
* Object containing the options for a Synthetic test as a monitor (for example, renotification).
*/
export declare class SyntheticsTestOptionsMonitorOptions {
    /**
    * Time interval before renotifying if the test is still failing (in minutes).
    */
    'renotifyInterval'?: number;
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
    }): SyntheticsTestOptionsMonitorOptions;
    static serialize(data: SyntheticsTestOptionsMonitorOptions): {
        [key: string]: any;
    };
    constructor();
}