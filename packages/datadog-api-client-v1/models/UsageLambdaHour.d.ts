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
* Number of lambda functions and sum of the invocations of all lambda functions for each hour for a given organization.
*/
export declare class UsageLambdaHour {
    /**
    * Contains the number of different functions for each region and AWS account.
    */
    'funcCount'?: number;
    /**
    * The hour for the usage.
    */
    'hour'?: Date;
    /**
    * Contains the sum of invocations of all functions.
    */
    'invocationsSum'?: number;
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
    }): UsageLambdaHour;
    static serialize(data: UsageLambdaHour): {
        [key: string]: any;
    };
    constructor();
}