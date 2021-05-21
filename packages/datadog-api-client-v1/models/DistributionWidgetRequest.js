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
exports.DistributionWidgetRequest = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Updated distribution widget.
*/
var DistributionWidgetRequest = /** @class */ (function () {
    function DistributionWidgetRequest() {
    }
    DistributionWidgetRequest.getAttributeTypeMap = function () {
        return DistributionWidgetRequest.attributeTypeMap;
    };
    DistributionWidgetRequest.deserialize = function (data) {
        var res = new DistributionWidgetRequest();
        res.apmQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.apm_query, "LogQueryDefinition", "");
        res.eventQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.event_query, "LogQueryDefinition", "");
        res.logQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.log_query, "LogQueryDefinition", "");
        res.networkQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.network_query, "LogQueryDefinition", "");
        res.processQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.process_query, "ProcessQueryDefinition", "");
        res.profileMetricsQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.profile_metrics_query, "LogQueryDefinition", "");
        res.q = ObjectSerializer_1.ObjectSerializer.deserialize(data.q, "string", "");
        res.rumQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.rum_query, "LogQueryDefinition", "");
        res.securityQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.security_query, "LogQueryDefinition", "");
        res.style = ObjectSerializer_1.ObjectSerializer.deserialize(data.style, "WidgetStyle", "");
        return res;
    };
    DistributionWidgetRequest.serialize = function (data) {
        var attributeTypes = DistributionWidgetRequest.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.apm_query = ObjectSerializer_1.ObjectSerializer.serialize(data.apmQuery, "LogQueryDefinition", "");
        res.event_query = ObjectSerializer_1.ObjectSerializer.serialize(data.eventQuery, "LogQueryDefinition", "");
        res.log_query = ObjectSerializer_1.ObjectSerializer.serialize(data.logQuery, "LogQueryDefinition", "");
        res.network_query = ObjectSerializer_1.ObjectSerializer.serialize(data.networkQuery, "LogQueryDefinition", "");
        res.process_query = ObjectSerializer_1.ObjectSerializer.serialize(data.processQuery, "ProcessQueryDefinition", "");
        res.profile_metrics_query = ObjectSerializer_1.ObjectSerializer.serialize(data.profileMetricsQuery, "LogQueryDefinition", "");
        res.q = ObjectSerializer_1.ObjectSerializer.serialize(data.q, "string", "");
        res.rum_query = ObjectSerializer_1.ObjectSerializer.serialize(data.rumQuery, "LogQueryDefinition", "");
        res.security_query = ObjectSerializer_1.ObjectSerializer.serialize(data.securityQuery, "LogQueryDefinition", "");
        res.style = ObjectSerializer_1.ObjectSerializer.serialize(data.style, "WidgetStyle", "");
        return res;
    };
    DistributionWidgetRequest.discriminator = undefined;
    DistributionWidgetRequest.attributeTypeMap = {
        "apmQuery": {
            "baseName": "apm_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "eventQuery": {
            "baseName": "event_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "logQuery": {
            "baseName": "log_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "networkQuery": {
            "baseName": "network_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "processQuery": {
            "baseName": "process_query",
            "type": "ProcessQueryDefinition",
            "format": ""
        },
        "profileMetricsQuery": {
            "baseName": "profile_metrics_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "q": {
            "baseName": "q",
            "type": "string",
            "format": ""
        },
        "rumQuery": {
            "baseName": "rum_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "securityQuery": {
            "baseName": "security_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "style": {
            "baseName": "style",
            "type": "WidgetStyle",
            "format": ""
        }
    };
    return DistributionWidgetRequest;
}());
exports.DistributionWidgetRequest = DistributionWidgetRequest;
//# sourceMappingURL=DistributionWidgetRequest.js.map