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
* Available prefix information for the Agent endpoints.
*/
export declare class IPPrefixesAgents {
    /**
    * List of IPv4 prefixes.
    */
    'prefixesIpv4'?: Array<string>;
    /**
    * List of IPv6 prefixes.
    */
    'prefixesIpv6'?: Array<string>;
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
    }): IPPrefixesAgents;
    static serialize(data: IPPrefixesAgents): {
        [key: string]: any;
    };
    constructor();
}
