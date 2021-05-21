/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SyntheticsPrivateLocationSecrets } from './SyntheticsPrivateLocationSecrets';
/**
* Object containing information about the private location to create.
*/
export declare class SyntheticsPrivateLocation {
    /**
    * Description of the private location.
    */
    'description': string;
    /**
    * Unique identifier of the private location.
    */
    'id'?: string;
    /**
    * Name of the private location.
    */
    'name': string;
    'secrets'?: SyntheticsPrivateLocationSecrets;
    /**
    * Array of tags attached to the private location.
    */
    'tags': Array<string>;
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
    }): SyntheticsPrivateLocation;
    static serialize(data: SyntheticsPrivateLocation): {
        [key: string]: any;
    };
    constructor();
}
