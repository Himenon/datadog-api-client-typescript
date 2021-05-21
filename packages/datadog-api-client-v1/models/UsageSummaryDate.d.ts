/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UsageSummaryDateOrg } from './UsageSummaryDateOrg';
/**
* Response with hourly report of all data billed by Datadog all organizations.
*/
export declare class UsageSummaryDate {
    /**
    * Shows the 99th percentile of all agent hosts over all hours in the current date for all organizations.
    */
    'agentHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all Azure app services using APM over all hours in the current date all organizations.
    */
    'apmAzureAppServiceHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for all organizations.
    */
    'apmHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all AWS hosts over all hours in the current date for all organizations.
    */
    'awsHostTop99p'?: number;
    /**
    * Shows the average of the number of functions that executed 1 or more times each hour in the current date for all organizations.
    */
    'awsLambdaFuncCount'?: number;
    /**
    * Shows the sum of all AWS Lambda invocations over all hours in the current date for all organizations.
    */
    'awsLambdaInvocationsSum'?: number;
    /**
    * Shows the 99th percentile of all Azure app services over all hours in the current date for all organizations.
    */
    'azureAppServiceTop99p'?: number;
    /**
    * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
    */
    'billableIngestedBytesSum'?: number;
    /**
    * Shows the sum of compliance containers over all hours in the current date for all organizations.
    */
    'complianceContainerCountSum'?: Object;
    /**
    * Shows the sum of compliance hosts over all hours in the current date for all organizations.
    */
    'complianceHostCountSum'?: number;
    /**
    * Shows the average of all distinct containers over all hours in the current date for all organizations.
    */
    'containerAvg'?: number;
    /**
    * Shows the high-water mark of all distinct containers over all hours in the current date for all organizations.
    */
    'containerHwm'?: number;
    /**
    * Shows the average number of distinct custom metrics over all hours in the current date for all organizations.
    */
    'customTsAvg'?: number;
    /**
    * The date for the usage.
    */
    'date'?: Date;
    /**
    * Shows the high-watermark of all Fargate tasks over all hours in the current date for all organizations.
    */
    'fargateTasksCountAvg'?: number;
    /**
    * Shows the average of all Fargate tasks over all hours in the current date for all organizations.
    */
    'fargateTasksCountHwm'?: number;
    /**
    * Shows the 99th percentile of all GCP hosts over all hours in the current date for all organizations.
    */
    'gcpHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all Heroku dynos over all hours in the current date for all organizations.
    */
    'herokuHostTop99p'?: number;
    /**
    * Shows the high-water mark of incident management monthly active users over all hours in the current date for all organizations.
    */
    'incidentManagementMonthlyActiveUsersHwm'?: number;
    /**
    * Shows the sum of all log events indexed over all hours in the current date for all organizations.
    */
    'indexedEventsCountSum'?: number;
    /**
    * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current date for all organizations.
    */
    'infraHostTop99p'?: number;
    /**
    * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
    */
    'ingestedEventsBytesSum'?: number;
    /**
    * Shows the sum of all IoT devices over all hours in the current date for all organizations.
    */
    'iotDeviceSum'?: number;
    /**
    * Shows the 99th percentile of all IoT devices over all hours in the current date all organizations.
    */
    'iotDeviceTop99p'?: number;
    /**
    * Shows the sum of all mobile RUM Sessions on Android over all hours in the current date for all organizations.
    */
    'mobileRumSessionCountAndroidSum'?: number;
    /**
    * Shows the sum of all mobile RUM Sessions on iOS over all hours in the current date for all organizations.
    */
    'mobileRumSessionCountIosSum'?: number;
    /**
    * Shows the sum of all mobile RUM Sessions over all hours in the current date for all organizations
    */
    'mobileRumSessionCountSum'?: number;
    /**
    * Shows the sum of all Network flows indexed over all hours in the current date for all organizations.
    */
    'netflowIndexedEventsCountSum'?: number;
    /**
    * Shows the 99th percentile of all distinct Networks hosts over all hours in the current date for all organizations.
    */
    'npmHostTop99p'?: number;
    /**
    * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.
    */
    'opentelemetryHostTop99p'?: number;
    /**
    * Organizations associated with a user.
    */
    'orgs'?: Array<UsageSummaryDateOrg>;
    /**
    * Shows the 99th percentile of all profiled hosts over all hours in the current date for all organizations.
    */
    'profilingHostTop99p'?: number;
    /**
    * Shows the sum of all browser RUM Sessions over all hours in the current date for all organizations
    */
    'rumSessionCountSum'?: number;
    /**
    * Shows the sum of RUM Sessions (browser and mobile) over all hours in the current date for all organizations.
    */
    'rumTotalSessionCountSum'?: number;
    /**
    * Shows the sum of all Synthetic browser tests over all hours in the current date for all organizations.
    */
    'syntheticsBrowserCheckCallsCountSum'?: number;
    /**
    * Shows the sum of all Synthetic API tests over all hours in the current date for all organizations.
    */
    'syntheticsCheckCallsCountSum'?: number;
    /**
    * Shows the sum of all Indexed Spans indexed over all hours in the current date for all organizations.
    */
    'traceSearchIndexedEventsCountSum'?: number;
    /**
    * Shows the sum of all tracing without limits bytes ingested over all hours in the current date for all organizations.
    */
    'twolIngestedEventsBytesSum'?: number;
    /**
    * Shows the 99th percentile of all vSphere hosts over all hours in the current date for all organizations.
    */
    'vsphereHostTop99p'?: number;
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
    }): UsageSummaryDate;
    static serialize(data: UsageSummaryDate): {
        [key: string]: any;
    };
    constructor();
}
