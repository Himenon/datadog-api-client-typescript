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
exports.UsageAttributionValues = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Fields in Usage Summary by tag(s).
*/
var UsageAttributionValues = /** @class */ (function () {
    function UsageAttributionValues() {
    }
    UsageAttributionValues.getAttributeTypeMap = function () {
        return UsageAttributionValues.attributeTypeMap;
    };
    UsageAttributionValues.deserialize = function (data) {
        var res = new UsageAttributionValues();
        res.apiPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.api_percentage, "number", "double");
        res.apiUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.api_usage, "number", "double");
        res.apmHostPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.apm_host_percentage, "number", "double");
        res.apmHostUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.apm_host_usage, "number", "double");
        res.browserPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.browser_percentage, "number", "double");
        res.browserUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.browser_usage, "number", "double");
        res.containerPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.container_percentage, "number", "double");
        res.containerUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.container_usage, "number", "double");
        res.customTimeseriesPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.custom_timeseries_percentage, "number", "double");
        res.customTimeseriesUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.custom_timeseries_usage, "number", "double");
        res.infraHostPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.infra_host_percentage, "number", "double");
        res.infraHostUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.infra_host_usage, "number", "double");
        res.lambdaFunctionsPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.lambda_functions_percentage, "number", "double");
        res.lambdaFunctionsUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.lambda_functions_usage, "number", "double");
        res.lambdaInvocationsPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.lambda_invocations_percentage, "number", "double");
        res.lambdaInvocationsUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.lambda_invocations_usage, "number", "double");
        res.lambdaPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.lambda_percentage, "number", "double");
        res.lambdaUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.lambda_usage, "number", "double");
        res.npmHostPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.npm_host_percentage, "number", "double");
        res.npmHostUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.npm_host_usage, "number", "double");
        res.profiledContainersPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.profiled_containers_percentage, "number", "double");
        res.profiledContainersUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.profiled_containers_usage, "number", "double");
        res.profiledHostsPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.profiled_hosts_percentage, "number", "double");
        res.profiledHostsUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.profiled_hosts_usage, "number", "double");
        res.snmpPercentage = ObjectSerializer_1.ObjectSerializer.deserialize(data.snmp_percentage, "number", "double");
        res.snmpUsage = ObjectSerializer_1.ObjectSerializer.deserialize(data.snmp_usage, "number", "double");
        return res;
    };
    UsageAttributionValues.serialize = function (data) {
        var attributeTypes = UsageAttributionValues.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.api_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.apiPercentage, "number", "double");
        res.api_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.apiUsage, "number", "double");
        res.apm_host_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.apmHostPercentage, "number", "double");
        res.apm_host_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.apmHostUsage, "number", "double");
        res.browser_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.browserPercentage, "number", "double");
        res.browser_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.browserUsage, "number", "double");
        res.container_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.containerPercentage, "number", "double");
        res.container_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.containerUsage, "number", "double");
        res.custom_timeseries_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.customTimeseriesPercentage, "number", "double");
        res.custom_timeseries_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.customTimeseriesUsage, "number", "double");
        res.infra_host_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.infraHostPercentage, "number", "double");
        res.infra_host_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.infraHostUsage, "number", "double");
        res.lambda_functions_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.lambdaFunctionsPercentage, "number", "double");
        res.lambda_functions_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.lambdaFunctionsUsage, "number", "double");
        res.lambda_invocations_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.lambdaInvocationsPercentage, "number", "double");
        res.lambda_invocations_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.lambdaInvocationsUsage, "number", "double");
        res.lambda_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.lambdaPercentage, "number", "double");
        res.lambda_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.lambdaUsage, "number", "double");
        res.npm_host_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.npmHostPercentage, "number", "double");
        res.npm_host_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.npmHostUsage, "number", "double");
        res.profiled_containers_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.profiledContainersPercentage, "number", "double");
        res.profiled_containers_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.profiledContainersUsage, "number", "double");
        res.profiled_hosts_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.profiledHostsPercentage, "number", "double");
        res.profiled_hosts_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.profiledHostsUsage, "number", "double");
        res.snmp_percentage = ObjectSerializer_1.ObjectSerializer.serialize(data.snmpPercentage, "number", "double");
        res.snmp_usage = ObjectSerializer_1.ObjectSerializer.serialize(data.snmpUsage, "number", "double");
        return res;
    };
    UsageAttributionValues.discriminator = undefined;
    UsageAttributionValues.attributeTypeMap = {
        "apiPercentage": {
            "baseName": "api_percentage",
            "type": "number",
            "format": "double"
        },
        "apiUsage": {
            "baseName": "api_usage",
            "type": "number",
            "format": "double"
        },
        "apmHostPercentage": {
            "baseName": "apm_host_percentage",
            "type": "number",
            "format": "double"
        },
        "apmHostUsage": {
            "baseName": "apm_host_usage",
            "type": "number",
            "format": "double"
        },
        "browserPercentage": {
            "baseName": "browser_percentage",
            "type": "number",
            "format": "double"
        },
        "browserUsage": {
            "baseName": "browser_usage",
            "type": "number",
            "format": "double"
        },
        "containerPercentage": {
            "baseName": "container_percentage",
            "type": "number",
            "format": "double"
        },
        "containerUsage": {
            "baseName": "container_usage",
            "type": "number",
            "format": "double"
        },
        "customTimeseriesPercentage": {
            "baseName": "custom_timeseries_percentage",
            "type": "number",
            "format": "double"
        },
        "customTimeseriesUsage": {
            "baseName": "custom_timeseries_usage",
            "type": "number",
            "format": "double"
        },
        "infraHostPercentage": {
            "baseName": "infra_host_percentage",
            "type": "number",
            "format": "double"
        },
        "infraHostUsage": {
            "baseName": "infra_host_usage",
            "type": "number",
            "format": "double"
        },
        "lambdaFunctionsPercentage": {
            "baseName": "lambda_functions_percentage",
            "type": "number",
            "format": "double"
        },
        "lambdaFunctionsUsage": {
            "baseName": "lambda_functions_usage",
            "type": "number",
            "format": "double"
        },
        "lambdaInvocationsPercentage": {
            "baseName": "lambda_invocations_percentage",
            "type": "number",
            "format": "double"
        },
        "lambdaInvocationsUsage": {
            "baseName": "lambda_invocations_usage",
            "type": "number",
            "format": "double"
        },
        "lambdaPercentage": {
            "baseName": "lambda_percentage",
            "type": "number",
            "format": "double"
        },
        "lambdaUsage": {
            "baseName": "lambda_usage",
            "type": "number",
            "format": "double"
        },
        "npmHostPercentage": {
            "baseName": "npm_host_percentage",
            "type": "number",
            "format": "double"
        },
        "npmHostUsage": {
            "baseName": "npm_host_usage",
            "type": "number",
            "format": "double"
        },
        "profiledContainersPercentage": {
            "baseName": "profiled_containers_percentage",
            "type": "number",
            "format": "double"
        },
        "profiledContainersUsage": {
            "baseName": "profiled_containers_usage",
            "type": "number",
            "format": "double"
        },
        "profiledHostsPercentage": {
            "baseName": "profiled_hosts_percentage",
            "type": "number",
            "format": "double"
        },
        "profiledHostsUsage": {
            "baseName": "profiled_hosts_usage",
            "type": "number",
            "format": "double"
        },
        "snmpPercentage": {
            "baseName": "snmp_percentage",
            "type": "number",
            "format": "double"
        },
        "snmpUsage": {
            "baseName": "snmp_usage",
            "type": "number",
            "format": "double"
        }
    };
    return UsageAttributionValues;
}());
exports.UsageAttributionValues = UsageAttributionValues;
//# sourceMappingURL=UsageAttributionValues.js.map