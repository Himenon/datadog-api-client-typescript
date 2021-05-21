"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSummaryResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Response with hourly report of all data billed by Datadog all organizations.
*/
var UsageSummaryResponse = /** @class */ (function () {
    function UsageSummaryResponse() {
    }
    UsageSummaryResponse.getAttributeTypeMap = function () {
        return UsageSummaryResponse.attributeTypeMap;
    };
    UsageSummaryResponse.deserialize = function (data) {
        var res = new UsageSummaryResponse();
        res.agentHostTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.agent_host_top99p_sum, "number", "int64");
        res.apmAzureAppServiceHostTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.apm_azure_app_service_host_top99p_sum, "number", "int64");
        res.apmHostTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.apm_host_top99p_sum, "number", "int64");
        res.awsHostTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.aws_host_top99p_sum, "number", "int64");
        res.awsLambdaFuncCount = ObjectSerializer_1.ObjectSerializer.deserialize(data.aws_lambda_func_count, "number", "int64");
        res.awsLambdaInvocationsSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.aws_lambda_invocations_sum, "number", "int64");
        res.azureAppServiceTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.azure_app_service_top99p_sum, "number", "int64");
        res.azureHostTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.azure_host_top99p_sum, "number", "int64");
        res.billableIngestedBytesAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.billable_ingested_bytes_agg_sum, "number", "int64");
        res.complianceContainerAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.compliance_container_agg_sum, "Object", "");
        res.complianceHostAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.compliance_host_agg_sum, "number", "int64");
        res.containerAvgSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.container_avg_sum, "number", "int64");
        res.containerHwmSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.container_hwm_sum, "number", "int64");
        res.customTsSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.custom_ts_sum, "number", "int64");
        res.endDate = ObjectSerializer_1.ObjectSerializer.deserialize(data.end_date, "Date", "date-time");
        res.fargateTasksCountAvgSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.fargate_tasks_count_avg_sum, "number", "int64");
        res.fargateTasksCountHwmSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.fargate_tasks_count_hwm_sum, "number", "int64");
        res.gcpHostTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.gcp_host_top99p_sum, "number", "int64");
        res.herokuHostTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.heroku_host_top99p_sum, "number", "int64");
        res.incidentManagementMonthlyActiveUsersHwmSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.incident_management_monthly_active_users_hwm_sum, "number", "int64");
        res.indexedEventsCountAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.indexed_events_count_agg_sum, "number", "int64");
        res.infraHostTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.infra_host_top99p_sum, "number", "int64");
        res.ingestedEventsBytesAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.ingested_events_bytes_agg_sum, "number", "int64");
        res.iotDeviceAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.iot_device_agg_sum, "number", "int64");
        res.iotDeviceTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.iot_device_top99p_sum, "number", "int64");
        res.lastUpdated = ObjectSerializer_1.ObjectSerializer.deserialize(data.last_updated, "Date", "date-time");
        res.liveIndexedEventsAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.live_indexed_events_agg_sum, "number", "int64");
        res.liveIngestedBytesAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.live_ingested_bytes_agg_sum, "number", "int64");
        res.logsByRetention = ObjectSerializer_1.ObjectSerializer.deserialize(data.logs_by_retention, "LogsByRetention", "");
        res.mobileRumSessionCountAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.mobile_rum_session_count_agg_sum, "number", "int64");
        res.mobileRumSessionCountAndroidAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.mobile_rum_session_count_android_agg_sum, "number", "int64");
        res.mobileRumSessionCountIosAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.mobile_rum_session_count_ios_agg_sum, "number", "int64");
        res.netflowIndexedEventsCountAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.netflow_indexed_events_count_agg_sum, "number", "int64");
        res.npmHostTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.npm_host_top99p_sum, "number", "int64");
        res.opentelemetryHostTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.opentelemetry_host_top99p_sum, "number", "int64");
        res.profilingContainerAgentCountAvg = ObjectSerializer_1.ObjectSerializer.deserialize(data.profiling_container_agent_count_avg, "number", "int64");
        res.profilingHostCountTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.profiling_host_count_top99p_sum, "number", "int64");
        res.rehydratedIndexedEventsAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.rehydrated_indexed_events_agg_sum, "number", "int64");
        res.rehydratedIngestedBytesAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.rehydrated_ingested_bytes_agg_sum, "number", "int64");
        res.rumSessionCountAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.rum_session_count_agg_sum, "number", "int64");
        res.rumTotalSessionCountAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.rum_total_session_count_agg_sum, "number", "int64");
        res.startDate = ObjectSerializer_1.ObjectSerializer.deserialize(data.start_date, "Date", "date-time");
        res.syntheticsBrowserCheckCallsCountAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.synthetics_browser_check_calls_count_agg_sum, "number", "int64");
        res.syntheticsCheckCallsCountAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.synthetics_check_calls_count_agg_sum, "number", "int64");
        res.traceSearchIndexedEventsCountAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.trace_search_indexed_events_count_agg_sum, "number", "int64");
        res.twolIngestedEventsBytesAggSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.twol_ingested_events_bytes_agg_sum, "number", "int64");
        res.usage = ObjectSerializer_1.ObjectSerializer.deserialize(data.usage, "Array<UsageSummaryDate>", "");
        res.vsphereHostTop99pSum = ObjectSerializer_1.ObjectSerializer.deserialize(data.vsphere_host_top99p_sum, "number", "int64");
        return res;
    };
    UsageSummaryResponse.serialize = function (data) {
        var attributeTypes = UsageSummaryResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.agent_host_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.agentHostTop99pSum, "number", "int64");
        res.apm_azure_app_service_host_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.apmAzureAppServiceHostTop99pSum, "number", "int64");
        res.apm_host_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.apmHostTop99pSum, "number", "int64");
        res.aws_host_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.awsHostTop99pSum, "number", "int64");
        res.aws_lambda_func_count = ObjectSerializer_1.ObjectSerializer.serialize(data.awsLambdaFuncCount, "number", "int64");
        res.aws_lambda_invocations_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.awsLambdaInvocationsSum, "number", "int64");
        res.azure_app_service_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.azureAppServiceTop99pSum, "number", "int64");
        res.azure_host_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.azureHostTop99pSum, "number", "int64");
        res.billable_ingested_bytes_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.billableIngestedBytesAggSum, "number", "int64");
        res.compliance_container_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.complianceContainerAggSum, "Object", "");
        res.compliance_host_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.complianceHostAggSum, "number", "int64");
        res.container_avg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.containerAvgSum, "number", "int64");
        res.container_hwm_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.containerHwmSum, "number", "int64");
        res.custom_ts_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.customTsSum, "number", "int64");
        res.end_date = ObjectSerializer_1.ObjectSerializer.serialize(data.endDate, "Date", "date-time");
        res.fargate_tasks_count_avg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.fargateTasksCountAvgSum, "number", "int64");
        res.fargate_tasks_count_hwm_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.fargateTasksCountHwmSum, "number", "int64");
        res.gcp_host_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.gcpHostTop99pSum, "number", "int64");
        res.heroku_host_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.herokuHostTop99pSum, "number", "int64");
        res.incident_management_monthly_active_users_hwm_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.incidentManagementMonthlyActiveUsersHwmSum, "number", "int64");
        res.indexed_events_count_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.indexedEventsCountAggSum, "number", "int64");
        res.infra_host_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.infraHostTop99pSum, "number", "int64");
        res.ingested_events_bytes_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.ingestedEventsBytesAggSum, "number", "int64");
        res.iot_device_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.iotDeviceAggSum, "number", "int64");
        res.iot_device_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.iotDeviceTop99pSum, "number", "int64");
        res.last_updated = ObjectSerializer_1.ObjectSerializer.serialize(data.lastUpdated, "Date", "date-time");
        res.live_indexed_events_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.liveIndexedEventsAggSum, "number", "int64");
        res.live_ingested_bytes_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.liveIngestedBytesAggSum, "number", "int64");
        res.logs_by_retention = ObjectSerializer_1.ObjectSerializer.serialize(data.logsByRetention, "LogsByRetention", "");
        res.mobile_rum_session_count_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.mobileRumSessionCountAggSum, "number", "int64");
        res.mobile_rum_session_count_android_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.mobileRumSessionCountAndroidAggSum, "number", "int64");
        res.mobile_rum_session_count_ios_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.mobileRumSessionCountIosAggSum, "number", "int64");
        res.netflow_indexed_events_count_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.netflowIndexedEventsCountAggSum, "number", "int64");
        res.npm_host_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.npmHostTop99pSum, "number", "int64");
        res.opentelemetry_host_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.opentelemetryHostTop99pSum, "number", "int64");
        res.profiling_container_agent_count_avg = ObjectSerializer_1.ObjectSerializer.serialize(data.profilingContainerAgentCountAvg, "number", "int64");
        res.profiling_host_count_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.profilingHostCountTop99pSum, "number", "int64");
        res.rehydrated_indexed_events_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.rehydratedIndexedEventsAggSum, "number", "int64");
        res.rehydrated_ingested_bytes_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.rehydratedIngestedBytesAggSum, "number", "int64");
        res.rum_session_count_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.rumSessionCountAggSum, "number", "int64");
        res.rum_total_session_count_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.rumTotalSessionCountAggSum, "number", "int64");
        res.start_date = ObjectSerializer_1.ObjectSerializer.serialize(data.startDate, "Date", "date-time");
        res.synthetics_browser_check_calls_count_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.syntheticsBrowserCheckCallsCountAggSum, "number", "int64");
        res.synthetics_check_calls_count_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.syntheticsCheckCallsCountAggSum, "number", "int64");
        res.trace_search_indexed_events_count_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.traceSearchIndexedEventsCountAggSum, "number", "int64");
        res.twol_ingested_events_bytes_agg_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.twolIngestedEventsBytesAggSum, "number", "int64");
        res.usage = ObjectSerializer_1.ObjectSerializer.serialize(data.usage, "Array<UsageSummaryDate>", "");
        res.vsphere_host_top99p_sum = ObjectSerializer_1.ObjectSerializer.serialize(data.vsphereHostTop99pSum, "number", "int64");
        return res;
    };
    UsageSummaryResponse.discriminator = undefined;
    UsageSummaryResponse.attributeTypeMap = {
        "agentHostTop99pSum": {
            "baseName": "agent_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "apmAzureAppServiceHostTop99pSum": {
            "baseName": "apm_azure_app_service_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "apmHostTop99pSum": {
            "baseName": "apm_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "awsHostTop99pSum": {
            "baseName": "aws_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "awsLambdaFuncCount": {
            "baseName": "aws_lambda_func_count",
            "type": "number",
            "format": "int64"
        },
        "awsLambdaInvocationsSum": {
            "baseName": "aws_lambda_invocations_sum",
            "type": "number",
            "format": "int64"
        },
        "azureAppServiceTop99pSum": {
            "baseName": "azure_app_service_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "azureHostTop99pSum": {
            "baseName": "azure_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "billableIngestedBytesAggSum": {
            "baseName": "billable_ingested_bytes_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "complianceContainerAggSum": {
            "baseName": "compliance_container_agg_sum",
            "type": "Object",
            "format": ""
        },
        "complianceHostAggSum": {
            "baseName": "compliance_host_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "containerAvgSum": {
            "baseName": "container_avg_sum",
            "type": "number",
            "format": "int64"
        },
        "containerHwmSum": {
            "baseName": "container_hwm_sum",
            "type": "number",
            "format": "int64"
        },
        "customTsSum": {
            "baseName": "custom_ts_sum",
            "type": "number",
            "format": "int64"
        },
        "endDate": {
            "baseName": "end_date",
            "type": "Date",
            "format": "date-time"
        },
        "fargateTasksCountAvgSum": {
            "baseName": "fargate_tasks_count_avg_sum",
            "type": "number",
            "format": "int64"
        },
        "fargateTasksCountHwmSum": {
            "baseName": "fargate_tasks_count_hwm_sum",
            "type": "number",
            "format": "int64"
        },
        "gcpHostTop99pSum": {
            "baseName": "gcp_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "herokuHostTop99pSum": {
            "baseName": "heroku_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "incidentManagementMonthlyActiveUsersHwmSum": {
            "baseName": "incident_management_monthly_active_users_hwm_sum",
            "type": "number",
            "format": "int64"
        },
        "indexedEventsCountAggSum": {
            "baseName": "indexed_events_count_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "infraHostTop99pSum": {
            "baseName": "infra_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "ingestedEventsBytesAggSum": {
            "baseName": "ingested_events_bytes_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "iotDeviceAggSum": {
            "baseName": "iot_device_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "iotDeviceTop99pSum": {
            "baseName": "iot_device_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "lastUpdated": {
            "baseName": "last_updated",
            "type": "Date",
            "format": "date-time"
        },
        "liveIndexedEventsAggSum": {
            "baseName": "live_indexed_events_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "liveIngestedBytesAggSum": {
            "baseName": "live_ingested_bytes_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "logsByRetention": {
            "baseName": "logs_by_retention",
            "type": "LogsByRetention",
            "format": ""
        },
        "mobileRumSessionCountAggSum": {
            "baseName": "mobile_rum_session_count_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "mobileRumSessionCountAndroidAggSum": {
            "baseName": "mobile_rum_session_count_android_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "mobileRumSessionCountIosAggSum": {
            "baseName": "mobile_rum_session_count_ios_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "netflowIndexedEventsCountAggSum": {
            "baseName": "netflow_indexed_events_count_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "npmHostTop99pSum": {
            "baseName": "npm_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "opentelemetryHostTop99pSum": {
            "baseName": "opentelemetry_host_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "profilingContainerAgentCountAvg": {
            "baseName": "profiling_container_agent_count_avg",
            "type": "number",
            "format": "int64"
        },
        "profilingHostCountTop99pSum": {
            "baseName": "profiling_host_count_top99p_sum",
            "type": "number",
            "format": "int64"
        },
        "rehydratedIndexedEventsAggSum": {
            "baseName": "rehydrated_indexed_events_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "rehydratedIngestedBytesAggSum": {
            "baseName": "rehydrated_ingested_bytes_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "rumSessionCountAggSum": {
            "baseName": "rum_session_count_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "rumTotalSessionCountAggSum": {
            "baseName": "rum_total_session_count_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "startDate": {
            "baseName": "start_date",
            "type": "Date",
            "format": "date-time"
        },
        "syntheticsBrowserCheckCallsCountAggSum": {
            "baseName": "synthetics_browser_check_calls_count_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "syntheticsCheckCallsCountAggSum": {
            "baseName": "synthetics_check_calls_count_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "traceSearchIndexedEventsCountAggSum": {
            "baseName": "trace_search_indexed_events_count_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "twolIngestedEventsBytesAggSum": {
            "baseName": "twol_ingested_events_bytes_agg_sum",
            "type": "number",
            "format": "int64"
        },
        "usage": {
            "baseName": "usage",
            "type": "Array<UsageSummaryDate>",
            "format": ""
        },
        "vsphereHostTop99pSum": {
            "baseName": "vsphere_host_top99p_sum",
            "type": "number",
            "format": "int64"
        }
    };
    return UsageSummaryResponse;
}());
exports.UsageSummaryResponse = UsageSummaryResponse;
//# sourceMappingURL=UsageSummaryResponse.js.map