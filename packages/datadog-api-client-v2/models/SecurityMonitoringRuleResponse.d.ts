/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SecurityMonitoringFilter } from './SecurityMonitoringFilter';
import { SecurityMonitoringRuleCase } from './SecurityMonitoringRuleCase';
import { SecurityMonitoringRuleOptions } from './SecurityMonitoringRuleOptions';
import { SecurityMonitoringRuleQuery } from './SecurityMonitoringRuleQuery';
/**
* Detection rule.
*/
export declare class SecurityMonitoringRuleResponse {
    /**
    * Cases for generating signals.
    */
    'cases'?: Array<SecurityMonitoringRuleCase>;
    /**
    * When the rule was created, timestamp in milliseconds.
    */
    'createdAt'?: number;
    /**
    * User ID of the user who created the rule.
    */
    'creationAuthorId'?: number;
    /**
    * Additional queries to filter matched events before they are processed.
    */
    'filters'?: Array<SecurityMonitoringFilter>;
    /**
    * The ID of the rule.
    */
    'id'?: string;
    /**
    * Whether the rule is included by default.
    */
    'isDefault'?: boolean;
    /**
    * Whether the rule has been deleted.
    */
    'isDeleted'?: boolean;
    /**
    * Whether the rule is enabled.
    */
    'isEnabled'?: boolean;
    /**
    * Message for generated signals.
    */
    'message'?: string;
    /**
    * The name of the rule.
    */
    'name'?: string;
    'options'?: SecurityMonitoringRuleOptions;
    /**
    * Queries for selecting logs which are part of the rule.
    */
    'queries'?: Array<SecurityMonitoringRuleQuery>;
    /**
    * Tags for generated signals.
    */
    'tags'?: Array<string>;
    /**
    * The version of the rule.
    */
    'version'?: number;
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
    }): SecurityMonitoringRuleResponse;
    static serialize(data: SecurityMonitoringRuleResponse): {
        [key: string]: any;
    };
    constructor();
}
