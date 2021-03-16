/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsTestConfig } from './SyntheticsTestConfig';
import { HttpFile } from '../http/http';

/**
* Object describing the API test configuration.
*/
export class SyntheticsAPITestResultFullCheck {
    'config': SyntheticsTestConfig;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "config",
            "baseName": "config",
            "type": "SyntheticsTestConfig",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsAPITestResultFullCheck.attributeTypeMap;
    }
    
    public constructor() {
    }
}
