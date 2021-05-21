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
exports.LogsMetricResponseGroupBy = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A group by rule.
*/
var LogsMetricResponseGroupBy = /** @class */ (function () {
    function LogsMetricResponseGroupBy() {
    }
    LogsMetricResponseGroupBy.getAttributeTypeMap = function () {
        return LogsMetricResponseGroupBy.attributeTypeMap;
    };
    LogsMetricResponseGroupBy.deserialize = function (data) {
        var res = new LogsMetricResponseGroupBy();
        res.path = ObjectSerializer_1.ObjectSerializer.deserialize(data.path, "string", "");
        res.tagName = ObjectSerializer_1.ObjectSerializer.deserialize(data.tag_name, "string", "");
        return res;
    };
    LogsMetricResponseGroupBy.serialize = function (data) {
        var attributeTypes = LogsMetricResponseGroupBy.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.path = ObjectSerializer_1.ObjectSerializer.serialize(data.path, "string", "");
        res.tag_name = ObjectSerializer_1.ObjectSerializer.serialize(data.tagName, "string", "");
        return res;
    };
    LogsMetricResponseGroupBy.discriminator = undefined;
    LogsMetricResponseGroupBy.attributeTypeMap = {
        "path": {
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        "tagName": {
            "baseName": "tag_name",
            "type": "string",
            "format": ""
        }
    };
    return LogsMetricResponseGroupBy;
}());
exports.LogsMetricResponseGroupBy = LogsMetricResponseGroupBy;
//# sourceMappingURL=LogsMetricResponseGroupBy.js.map