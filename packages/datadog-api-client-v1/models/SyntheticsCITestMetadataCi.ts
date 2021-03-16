/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Describe CI provider.
*/
export class SyntheticsCITestMetadataCi {
    /**
    * Name of the pipeline.
    */
    'pipeline'?: string;
    /**
    * Name of the CI provider.
    */
    'provider'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pipeline",
            "baseName": "pipeline",
            "type": "string",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsCITestMetadataCi.attributeTypeMap;
    }
    
    public constructor() {
    }
}
