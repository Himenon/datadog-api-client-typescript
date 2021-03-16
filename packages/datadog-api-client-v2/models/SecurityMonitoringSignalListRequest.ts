/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityMonitoringSignalListRequestFilter } from './SecurityMonitoringSignalListRequestFilter';
import { SecurityMonitoringSignalListRequestPage } from './SecurityMonitoringSignalListRequestPage';
import { SecurityMonitoringSignalsSort } from './SecurityMonitoringSignalsSort';
import { HttpFile } from '../http/http';

/**
* The request for a security signal list.
*/
export class SecurityMonitoringSignalListRequest {
    'filter'?: SecurityMonitoringSignalListRequestFilter;
    'page'?: SecurityMonitoringSignalListRequestPage;
    'sort'?: SecurityMonitoringSignalsSort;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "SecurityMonitoringSignalListRequestFilter",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "SecurityMonitoringSignalListRequestPage",
            "format": ""
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "SecurityMonitoringSignalsSort",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SecurityMonitoringSignalListRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}
