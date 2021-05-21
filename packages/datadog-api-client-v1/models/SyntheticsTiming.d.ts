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
* Object containing all metrics and their values collected for a Synthetic API test. Learn more about those metrics in [Synthetics documentation](https://docs.datadoghq.com/synthetics/#metrics).
*/
export declare class SyntheticsTiming {
    /**
    * The duration in millisecond of the DNS lookup.
    */
    'dns'?: number;
    /**
    * The time in millisecond to download the response.
    */
    'download'?: number;
    /**
    * The time in millisecond to first byte.
    */
    'firstByte'?: number;
    /**
    * The duration in millisecond of the TLS handshake.
    */
    'handshake'?: number;
    /**
    * The time in millisecond spent during redirections.
    */
    'redirect'?: number;
    /**
    * The duration in millisecond of the TLS handshake.
    */
    'ssl'?: number;
    /**
    * Time in millisecond to establish the TCP connection.
    */
    'tcp'?: number;
    /**
    * The overall time in millisecond the request took to be processed.
    */
    'total'?: number;
    /**
    * Time spent in millisecond waiting for a response.
    */
    'wait'?: number;
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
    }): SyntheticsTiming;
    static serialize(data: SyntheticsTiming): {
        [key: string]: any;
    };
    constructor();
}
