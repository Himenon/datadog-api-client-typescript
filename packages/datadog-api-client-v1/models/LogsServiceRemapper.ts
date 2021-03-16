/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsServiceRemapperType } from './LogsServiceRemapperType';
import { HttpFile } from '../http/http';

/**
* Use this processor if you want to assign one or more attributes as the official service.  **Note:** If multiple service remapper processors can be applied to a given log, only the first one (according to the pipeline order) is taken into account.
*/
export class LogsServiceRemapper {
    /**
    * Whether or not the processor is enabled.
    */
    'isEnabled'?: boolean;
    /**
    * Name of the processor.
    */
    'name'?: string;
    /**
    * Array of source attributes.
    */
    'sources': Array<string>;
    'type': LogsServiceRemapperType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isEnabled",
            "baseName": "is_enabled",
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
            "name": "sources",
            "baseName": "sources",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LogsServiceRemapperType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsServiceRemapper.attributeTypeMap;
    }
    
    public constructor() {
    }
}
