/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsURLParserType } from './LogsURLParserType';
import { HttpFile } from '../http/http';

/**
* This processor extracts query parameters and other important parameters from a URL.
*/
export class LogsURLParser {
    /**
    * Whether or not the processor is enabled.
    */
    'isEnabled'?: boolean;
    /**
    * Name of the processor.
    */
    'name'?: string;
    /**
    * Normalize the ending slashes or not.
    */
    'normalizeEndingSlashes'?: boolean;
    /**
    * Array of source attributes.
    */
    'sources': Array<string>;
    /**
    * Name of the parent attribute that contains all the extracted details from the `sources`.
    */
    'target': string;
    'type': LogsURLParserType;

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
            "name": "normalizeEndingSlashes",
            "baseName": "normalize_ending_slashes",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LogsURLParserType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsURLParser.attributeTypeMap;
    }
    
    public constructor() {
    }
}
