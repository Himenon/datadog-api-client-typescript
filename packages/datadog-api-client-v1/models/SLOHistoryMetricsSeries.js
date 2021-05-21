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
exports.SLOHistoryMetricsSeries = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A representation of `metric` based SLO time series for the provided queries. This is the same response type from `batch_query` endpoint.
*/
var SLOHistoryMetricsSeries = /** @class */ (function () {
    function SLOHistoryMetricsSeries() {
    }
    SLOHistoryMetricsSeries.getAttributeTypeMap = function () {
        return SLOHistoryMetricsSeries.attributeTypeMap;
    };
    SLOHistoryMetricsSeries.deserialize = function (data) {
        var res = new SLOHistoryMetricsSeries();
        if (data.count === undefined) {
            throw new TypeError("missing required attribute 'count' on 'SLOHistoryMetricsSeries' object");
        }
        res.count = ObjectSerializer_1.ObjectSerializer.deserialize(data.count, "number", "int64");
        if (data.metadata === undefined) {
            throw new TypeError("missing required attribute 'metadata' on 'SLOHistoryMetricsSeries' object");
        }
        res.metadata = ObjectSerializer_1.ObjectSerializer.deserialize(data.metadata, "SLOHistoryMetricsSeriesMetadata", "");
        if (data.sum === undefined) {
            throw new TypeError("missing required attribute 'sum' on 'SLOHistoryMetricsSeries' object");
        }
        res.sum = ObjectSerializer_1.ObjectSerializer.deserialize(data.sum, "number", "double");
        if (data.values === undefined) {
            throw new TypeError("missing required attribute 'values' on 'SLOHistoryMetricsSeries' object");
        }
        res.values = ObjectSerializer_1.ObjectSerializer.deserialize(data.values, "Array<number>", "double");
        return res;
    };
    SLOHistoryMetricsSeries.serialize = function (data) {
        var attributeTypes = SLOHistoryMetricsSeries.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.count === undefined) {
            throw new TypeError("missing required attribute 'count' on 'SLOHistoryMetricsSeries' object");
        }
        res.count = ObjectSerializer_1.ObjectSerializer.serialize(data.count, "number", "int64");
        if (data.metadata === undefined) {
            throw new TypeError("missing required attribute 'metadata' on 'SLOHistoryMetricsSeries' object");
        }
        res.metadata = ObjectSerializer_1.ObjectSerializer.serialize(data.metadata, "SLOHistoryMetricsSeriesMetadata", "");
        if (data.sum === undefined) {
            throw new TypeError("missing required attribute 'sum' on 'SLOHistoryMetricsSeries' object");
        }
        res.sum = ObjectSerializer_1.ObjectSerializer.serialize(data.sum, "number", "double");
        if (data.values === undefined) {
            throw new TypeError("missing required attribute 'values' on 'SLOHistoryMetricsSeries' object");
        }
        res.values = ObjectSerializer_1.ObjectSerializer.serialize(data.values, "Array<number>", "double");
        return res;
    };
    SLOHistoryMetricsSeries.discriminator = undefined;
    SLOHistoryMetricsSeries.attributeTypeMap = {
        "count": {
            "baseName": "count",
            "type": "number",
            "format": "int64"
        },
        "metadata": {
            "baseName": "metadata",
            "type": "SLOHistoryMetricsSeriesMetadata",
            "format": ""
        },
        "sum": {
            "baseName": "sum",
            "type": "number",
            "format": "double"
        },
        "values": {
            "baseName": "values",
            "type": "Array<number>",
            "format": "double"
        }
    };
    return SLOHistoryMetricsSeries;
}());
exports.SLOHistoryMetricsSeries = SLOHistoryMetricsSeries;
//# sourceMappingURL=SLOHistoryMetricsSeries.js.map