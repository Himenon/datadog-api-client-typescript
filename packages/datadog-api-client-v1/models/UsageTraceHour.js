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
exports.UsageTraceHour = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The hours of trace usage.
*/
var UsageTraceHour = /** @class */ (function () {
    function UsageTraceHour() {
    }
    UsageTraceHour.getAttributeTypeMap = function () {
        return UsageTraceHour.attributeTypeMap;
    };
    UsageTraceHour.deserialize = function (data) {
        var res = new UsageTraceHour();
        res.hour = ObjectSerializer_1.ObjectSerializer.deserialize(data.hour, "Date", "date-time");
        res.indexedEventsCount = ObjectSerializer_1.ObjectSerializer.deserialize(data.indexed_events_count, "number", "int64");
        return res;
    };
    UsageTraceHour.serialize = function (data) {
        var attributeTypes = UsageTraceHour.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.hour = ObjectSerializer_1.ObjectSerializer.serialize(data.hour, "Date", "date-time");
        res.indexed_events_count = ObjectSerializer_1.ObjectSerializer.serialize(data.indexedEventsCount, "number", "int64");
        return res;
    };
    UsageTraceHour.discriminator = undefined;
    UsageTraceHour.attributeTypeMap = {
        "hour": {
            "baseName": "hour",
            "type": "Date",
            "format": "date-time"
        },
        "indexedEventsCount": {
            "baseName": "indexed_events_count",
            "type": "number",
            "format": "int64"
        }
    };
    return UsageTraceHour;
}());
exports.UsageTraceHour = UsageTraceHour;
//# sourceMappingURL=UsageTraceHour.js.map