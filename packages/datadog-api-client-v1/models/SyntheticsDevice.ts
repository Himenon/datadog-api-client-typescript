/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsDeviceID } from './SyntheticsDeviceID';
import { HttpFile } from '../http/http';

/**
* Object describing the device used to perform the Synthetic test.
*/
export class SyntheticsDevice {
    /**
    * Screen height of the device.
    */
    'height': number;
    'id': SyntheticsDeviceID;
    /**
    * Whether or not the device is a mobile.
    */
    'isMobile'?: boolean;
    /**
    * The device name.
    */
    'name': string;
    /**
    * Screen width of the device.
    */
    'width': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "SyntheticsDeviceID",
            "format": ""
        },
        {
            "name": "isMobile",
            "baseName": "isMobile",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsDevice.attributeTypeMap;
    }
    
    public constructor() {
    }
}
