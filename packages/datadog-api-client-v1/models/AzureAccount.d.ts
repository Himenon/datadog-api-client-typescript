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
* Datadog-Azure integrations configured for your organization.
*/
export declare class AzureAccount {
    /**
    * Your Azure web application ID.
    */
    'clientId'?: string;
    /**
    * Your Azure web application secret key.
    */
    'clientSecret'?: string;
    /**
    * Errors in your configuration.
    */
    'errors'?: Array<string>;
    /**
    * Limit the Azure instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog.
    */
    'hostFilters'?: string;
    /**
    * Your New Azure web application ID.
    */
    'newClientId'?: string;
    /**
    * Your New Azure Active Directory ID.
    */
    'newTenantName'?: string;
    /**
    * Your Azure Active Directory ID.
    */
    'tenantName'?: string;
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
    }): AzureAccount;
    static serialize(data: AzureAccount): {
        [key: string]: any;
    };
    constructor();
}
