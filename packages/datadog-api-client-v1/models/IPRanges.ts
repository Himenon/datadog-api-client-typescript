/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IPPrefixesAPI } from './IPPrefixesAPI';
import { IPPrefixesAPM } from './IPPrefixesAPM';
import { IPPrefixesAgents } from './IPPrefixesAgents';
import { IPPrefixesLogs } from './IPPrefixesLogs';
import { IPPrefixesProcess } from './IPPrefixesProcess';
import { IPPrefixesSynthetics } from './IPPrefixesSynthetics';
import { IPPrefixesWebhooks } from './IPPrefixesWebhooks';
import { HttpFile } from '../http/http';

/**
* IP ranges.
*/
export class IPRanges {
    'agents'?: IPPrefixesAgents;
    'api'?: IPPrefixesAPI;
    'apm'?: IPPrefixesAPM;
    'logs'?: IPPrefixesLogs;
    /**
    * Date when last updated, in the form `YYYY-MM-DD-hh-mm-ss`.
    */
    'modified'?: string;
    'process'?: IPPrefixesProcess;
    'synthetics'?: IPPrefixesSynthetics;
    /**
    * Version of the IP list.
    */
    'version'?: number;
    'webhooks'?: IPPrefixesWebhooks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "agents",
            "baseName": "agents",
            "type": "IPPrefixesAgents",
            "format": ""
        },
        {
            "name": "api",
            "baseName": "api",
            "type": "IPPrefixesAPI",
            "format": ""
        },
        {
            "name": "apm",
            "baseName": "apm",
            "type": "IPPrefixesAPM",
            "format": ""
        },
        {
            "name": "logs",
            "baseName": "logs",
            "type": "IPPrefixesLogs",
            "format": ""
        },
        {
            "name": "modified",
            "baseName": "modified",
            "type": "string",
            "format": ""
        },
        {
            "name": "process",
            "baseName": "process",
            "type": "IPPrefixesProcess",
            "format": ""
        },
        {
            "name": "synthetics",
            "baseName": "synthetics",
            "type": "IPPrefixesSynthetics",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "webhooks",
            "baseName": "webhooks",
            "type": "IPPrefixesWebhooks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IPRanges.attributeTypeMap;
    }
    
    public constructor() {
    }
}
