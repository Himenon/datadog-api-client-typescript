/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsTraceRemapperType } from './LogsTraceRemapperType';
import { HttpFile } from '../http/http';

/**
* There are two ways to improve correlation between application traces and logs.    1. Follow the documentation on [how to inject a trace ID in the application logs](https://docs.datadoghq.com/tracing/connect_logs_and_traces)   and by default log integrations take care of all the rest of the setup.    2. Use the Trace remapper processor to define a log attribute as its associated trace ID.
*/
export class LogsTraceRemapper {
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
    'sources'?: Array<string>;
    'type': LogsTraceRemapperType;

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
            "type": "LogsTraceRemapperType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsTraceRemapper.attributeTypeMap;
    }
    
    public constructor() {
    }
}
