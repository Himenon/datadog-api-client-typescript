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
exports.LogsAggregateRequest = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The object sent with the request to retrieve a list of logs from your organization.
*/
var LogsAggregateRequest = /** @class */ (function () {
    function LogsAggregateRequest() {
    }
    LogsAggregateRequest.getAttributeTypeMap = function () {
        return LogsAggregateRequest.attributeTypeMap;
    };
    LogsAggregateRequest.deserialize = function (data) {
        var res = new LogsAggregateRequest();
        res.compute = ObjectSerializer_1.ObjectSerializer.deserialize(data.compute, "Array<LogsCompute>", "");
        res.filter = ObjectSerializer_1.ObjectSerializer.deserialize(data.filter, "LogsQueryFilter", "");
        res.groupBy = ObjectSerializer_1.ObjectSerializer.deserialize(data.group_by, "Array<LogsGroupBy>", "");
        res.options = ObjectSerializer_1.ObjectSerializer.deserialize(data.options, "LogsQueryOptions", "");
        res.page = ObjectSerializer_1.ObjectSerializer.deserialize(data.page, "LogsAggregateRequestPage", "");
        return res;
    };
    LogsAggregateRequest.serialize = function (data) {
        var attributeTypes = LogsAggregateRequest.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.compute = ObjectSerializer_1.ObjectSerializer.serialize(data.compute, "Array<LogsCompute>", "");
        res.filter = ObjectSerializer_1.ObjectSerializer.serialize(data.filter, "LogsQueryFilter", "");
        res.group_by = ObjectSerializer_1.ObjectSerializer.serialize(data.groupBy, "Array<LogsGroupBy>", "");
        res.options = ObjectSerializer_1.ObjectSerializer.serialize(data.options, "LogsQueryOptions", "");
        res.page = ObjectSerializer_1.ObjectSerializer.serialize(data.page, "LogsAggregateRequestPage", "");
        return res;
    };
    LogsAggregateRequest.discriminator = undefined;
    LogsAggregateRequest.attributeTypeMap = {
        "compute": {
            "baseName": "compute",
            "type": "Array<LogsCompute>",
            "format": ""
        },
        "filter": {
            "baseName": "filter",
            "type": "LogsQueryFilter",
            "format": ""
        },
        "groupBy": {
            "baseName": "group_by",
            "type": "Array<LogsGroupBy>",
            "format": ""
        },
        "options": {
            "baseName": "options",
            "type": "LogsQueryOptions",
            "format": ""
        },
        "page": {
            "baseName": "page",
            "type": "LogsAggregateRequestPage",
            "format": ""
        }
    };
    return LogsAggregateRequest;
}());
exports.LogsAggregateRequest = LogsAggregateRequest;
//# sourceMappingURL=LogsAggregateRequest.js.map