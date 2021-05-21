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
exports.SLOHistoryMetrics = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A `metric` based SLO history response.  This is not included in responses for `monitor` based SLOs.
*/
var SLOHistoryMetrics = /** @class */ (function () {
    function SLOHistoryMetrics() {
    }
    SLOHistoryMetrics.getAttributeTypeMap = function () {
        return SLOHistoryMetrics.attributeTypeMap;
    };
    SLOHistoryMetrics.deserialize = function (data) {
        var res = new SLOHistoryMetrics();
        if (data.denominator === undefined) {
            throw new TypeError("missing required attribute 'denominator' on 'SLOHistoryMetrics' object");
        }
        res.denominator = ObjectSerializer_1.ObjectSerializer.deserialize(data.denominator, "SLOHistoryMetricsSeries", "");
        if (data.interval === undefined) {
            throw new TypeError("missing required attribute 'interval' on 'SLOHistoryMetrics' object");
        }
        res.interval = ObjectSerializer_1.ObjectSerializer.deserialize(data.interval, "number", "int64");
        res.message = ObjectSerializer_1.ObjectSerializer.deserialize(data.message, "string", "");
        if (data.numerator === undefined) {
            throw new TypeError("missing required attribute 'numerator' on 'SLOHistoryMetrics' object");
        }
        res.numerator = ObjectSerializer_1.ObjectSerializer.deserialize(data.numerator, "SLOHistoryMetricsSeries", "");
        if (data.query === undefined) {
            throw new TypeError("missing required attribute 'query' on 'SLOHistoryMetrics' object");
        }
        res.query = ObjectSerializer_1.ObjectSerializer.deserialize(data.query, "string", "");
        if (data.res_type === undefined) {
            throw new TypeError("missing required attribute 'res_type' on 'SLOHistoryMetrics' object");
        }
        res.resType = ObjectSerializer_1.ObjectSerializer.deserialize(data.res_type, "string", "");
        if (data.resp_version === undefined) {
            throw new TypeError("missing required attribute 'resp_version' on 'SLOHistoryMetrics' object");
        }
        res.respVersion = ObjectSerializer_1.ObjectSerializer.deserialize(data.resp_version, "number", "int64");
        if (data.times === undefined) {
            throw new TypeError("missing required attribute 'times' on 'SLOHistoryMetrics' object");
        }
        res.times = ObjectSerializer_1.ObjectSerializer.deserialize(data.times, "Array<number>", "double");
        return res;
    };
    SLOHistoryMetrics.serialize = function (data) {
        var attributeTypes = SLOHistoryMetrics.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.denominator === undefined) {
            throw new TypeError("missing required attribute 'denominator' on 'SLOHistoryMetrics' object");
        }
        res.denominator = ObjectSerializer_1.ObjectSerializer.serialize(data.denominator, "SLOHistoryMetricsSeries", "");
        if (data.interval === undefined) {
            throw new TypeError("missing required attribute 'interval' on 'SLOHistoryMetrics' object");
        }
        res.interval = ObjectSerializer_1.ObjectSerializer.serialize(data.interval, "number", "int64");
        res.message = ObjectSerializer_1.ObjectSerializer.serialize(data.message, "string", "");
        if (data.numerator === undefined) {
            throw new TypeError("missing required attribute 'numerator' on 'SLOHistoryMetrics' object");
        }
        res.numerator = ObjectSerializer_1.ObjectSerializer.serialize(data.numerator, "SLOHistoryMetricsSeries", "");
        if (data.query === undefined) {
            throw new TypeError("missing required attribute 'query' on 'SLOHistoryMetrics' object");
        }
        res.query = ObjectSerializer_1.ObjectSerializer.serialize(data.query, "string", "");
        if (data.resType === undefined) {
            throw new TypeError("missing required attribute 'res_type' on 'SLOHistoryMetrics' object");
        }
        res.res_type = ObjectSerializer_1.ObjectSerializer.serialize(data.resType, "string", "");
        if (data.respVersion === undefined) {
            throw new TypeError("missing required attribute 'resp_version' on 'SLOHistoryMetrics' object");
        }
        res.resp_version = ObjectSerializer_1.ObjectSerializer.serialize(data.respVersion, "number", "int64");
        if (data.times === undefined) {
            throw new TypeError("missing required attribute 'times' on 'SLOHistoryMetrics' object");
        }
        res.times = ObjectSerializer_1.ObjectSerializer.serialize(data.times, "Array<number>", "double");
        return res;
    };
    SLOHistoryMetrics.discriminator = undefined;
    SLOHistoryMetrics.attributeTypeMap = {
        "denominator": {
            "baseName": "denominator",
            "type": "SLOHistoryMetricsSeries",
            "format": ""
        },
        "interval": {
            "baseName": "interval",
            "type": "number",
            "format": "int64"
        },
        "message": {
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        "numerator": {
            "baseName": "numerator",
            "type": "SLOHistoryMetricsSeries",
            "format": ""
        },
        "query": {
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        "resType": {
            "baseName": "res_type",
            "type": "string",
            "format": ""
        },
        "respVersion": {
            "baseName": "resp_version",
            "type": "number",
            "format": "int64"
        },
        "times": {
            "baseName": "times",
            "type": "Array<number>",
            "format": "double"
        }
    };
    return SLOHistoryMetrics;
}());
exports.SLOHistoryMetrics = SLOHistoryMetrics;
//# sourceMappingURL=SLOHistoryMetrics.js.map