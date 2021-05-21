/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
* Returns the AWS account associated with this integration.
*/
export declare class AWSAccount {
    /**
    * Your AWS access key ID. Only required if your AWS account is a GovCloud or China account.
    */
    'accessKeyId'?: string;
    /**
    * Your AWS Account ID without dashes.
    */
    'accountId'?: string;
    /**
    * An object, (in the form `{\"namespace1\":true/false, \"namespace2\":true/false}`), that enables or disables metric collection for specific AWS namespaces for this AWS account only.
    */
    'accountSpecificNamespaceRules'?: {
        [key: string]: boolean;
    };
    /**
    * An array of AWS regions to exclude from metrics collection.
    */
    'excludedRegions'?: Array<string>;
    /**
    * The array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2. Wildcards, such as `?` (for single characters) and `*` (for multiple characters) can also be used. Only hosts that match one of the defined tags will be imported into Datadog. The rest will be ignored. Host matching a given tag can also be excluded by adding `!` before the tag. For example, `env:production,instance-type:c1.*,!region:us-east-1`
    */
    'filterTags'?: Array<string>;
    /**
    * Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration.
    */
    'hostTags'?: Array<string>;
    /**
    * Your Datadog role delegation name.
    */
    'roleName'?: string;
    /**
    * Your AWS secret access key. Only required if your AWS account is a GovCloud or China account.
    */
    'secretAccessKey'?: string;
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
    }): AWSAccount;
    static serialize(data: AWSAccount): {
        [key: string]: any;
    };
    constructor();
}
