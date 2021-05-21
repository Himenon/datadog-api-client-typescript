/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserCreateAttributes } from './UserCreateAttributes';
import { UserRelationships } from './UserRelationships';
import { UsersType } from './UsersType';
/**
* Object to create a user.
*/
export declare class UserCreateData {
    'attributes': UserCreateAttributes;
    'relationships'?: UserRelationships;
    'type': UsersType;
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
    }): UserCreateData;
    static serialize(data: UserCreateData): {
        [key: string]: any;
    };
    constructor();
}
