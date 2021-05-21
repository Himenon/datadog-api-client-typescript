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
exports.LogsGroupBy = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A group by rule
*/
var LogsGroupBy = /** @class */ (function () {
    function LogsGroupBy() {
    }
    LogsGroupBy.getAttributeTypeMap = function () {
        return LogsGroupBy.attributeTypeMap;
    };
    LogsGroupBy.deserialize = function (data) {
        var res = new LogsGroupBy();
        if (data.facet === undefined) {
            throw new TypeError("missing required attribute 'facet' on 'LogsGroupBy' object");
        }
        res.facet = ObjectSerializer_1.ObjectSerializer.deserialize(data.facet, "string", "");
        res.histogram = ObjectSerializer_1.ObjectSerializer.deserialize(data.histogram, "LogsGroupByHistogram", "");
        res.limit = ObjectSerializer_1.ObjectSerializer.deserialize(data.limit, "number", "int64");
        res.missing = ObjectSerializer_1.ObjectSerializer.deserialize(data.missing, "LogsGroupByMissing", "");
        res.sort = ObjectSerializer_1.ObjectSerializer.deserialize(data.sort, "LogsAggregateSort", "");
        res.total = ObjectSerializer_1.ObjectSerializer.deserialize(data.total, "LogsGroupByTotal", "");
        return res;
    };
    LogsGroupBy.serialize = function (data) {
        var attributeTypes = LogsGroupBy.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.facet === undefined) {
            throw new TypeError("missing required attribute 'facet' on 'LogsGroupBy' object");
        }
        res.facet = ObjectSerializer_1.ObjectSerializer.serialize(data.facet, "string", "");
        res.histogram = ObjectSerializer_1.ObjectSerializer.serialize(data.histogram, "LogsGroupByHistogram", "");
        res.limit = ObjectSerializer_1.ObjectSerializer.serialize(data.limit, "number", "int64");
        res.missing = ObjectSerializer_1.ObjectSerializer.serialize(data.missing, "LogsGroupByMissing", "");
        res.sort = ObjectSerializer_1.ObjectSerializer.serialize(data.sort, "LogsAggregateSort", "");
        res.total = ObjectSerializer_1.ObjectSerializer.serialize(data.total, "LogsGroupByTotal", "");
        return res;
    };
    LogsGroupBy.discriminator = undefined;
    LogsGroupBy.attributeTypeMap = {
        "facet": {
            "baseName": "facet",
            "type": "string",
            "format": ""
        },
        "histogram": {
            "baseName": "histogram",
            "type": "LogsGroupByHistogram",
            "format": ""
        },
        "limit": {
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        "missing": {
            "baseName": "missing",
            "type": "LogsGroupByMissing",
            "format": ""
        },
        "sort": {
            "baseName": "sort",
            "type": "LogsAggregateSort",
            "format": ""
        },
        "total": {
            "baseName": "total",
            "type": "LogsGroupByTotal",
            "format": ""
        }
    };
    return LogsGroupBy;
}());
exports.LogsGroupBy = LogsGroupBy;
//# sourceMappingURL=LogsGroupBy.js.map