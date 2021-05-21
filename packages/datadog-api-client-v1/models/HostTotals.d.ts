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
* Total number of host currently monitored by Datadog.
*/
export declare class HostTotals {
    /**
    * Total number of active host (UP and ???) reporting to Datadog.
    */
    'totalActive'?: number;
    /**
    * Number of host that are UP and reporting to Datadog.
    */
    'totalUp'?: number;
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
    }): HostTotals;
    static serialize(data: HostTotals): {
        [key: string]: any;
    };
    constructor();
}
