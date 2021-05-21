/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SyntheticsAssertion } from './SyntheticsAssertion';
import { SyntheticsBrowserVariable } from './SyntheticsBrowserVariable';
import { SyntheticsConfigVariable } from './SyntheticsConfigVariable';
import { SyntheticsTestRequest } from './SyntheticsTestRequest';
/**
* Configuration object for a Synthetic test.
*/
export declare class SyntheticsTestConfig {
    /**
    * Array of assertions used for the test.
    */
    'assertions': Array<SyntheticsAssertion>;
    /**
    * API tests only - array of variables used for the test.
    */
    'configVariables'?: Array<SyntheticsConfigVariable>;
    'request'?: SyntheticsTestRequest;
    /**
    * Browser tests only - array of variables used for the test steps.
    */
    'variables'?: Array<SyntheticsBrowserVariable>;
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
    }): SyntheticsTestConfig;
    static serialize(data: SyntheticsTestConfig): {
        [key: string]: any;
    };
    constructor();
}
