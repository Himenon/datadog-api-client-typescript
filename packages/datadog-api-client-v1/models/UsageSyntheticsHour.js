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
exports.UsageSyntheticsHour = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The number of synthetics tests run for each hour for a given organization.
*/
var UsageSyntheticsHour = /** @class */ (function () {
    function UsageSyntheticsHour() {
    }
    UsageSyntheticsHour.getAttributeTypeMap = function () {
        return UsageSyntheticsHour.attributeTypeMap;
    };
    UsageSyntheticsHour.deserialize = function (data) {
        var res = new UsageSyntheticsHour();
        res.checkCallsCount = ObjectSerializer_1.ObjectSerializer.deserialize(data.check_calls_count, "number", "int64");
        res.hour = ObjectSerializer_1.ObjectSerializer.deserialize(data.hour, "Date", "date-time");
        return res;
    };
    UsageSyntheticsHour.serialize = function (data) {
        var attributeTypes = UsageSyntheticsHour.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.check_calls_count = ObjectSerializer_1.ObjectSerializer.serialize(data.checkCallsCount, "number", "int64");
        res.hour = ObjectSerializer_1.ObjectSerializer.serialize(data.hour, "Date", "date-time");
        return res;
    };
    UsageSyntheticsHour.discriminator = undefined;
    UsageSyntheticsHour.attributeTypeMap = {
        "checkCallsCount": {
            "baseName": "check_calls_count",
            "type": "number",
            "format": "int64"
        },
        "hour": {
            "baseName": "hour",
            "type": "Date",
            "format": "date-time"
        }
    };
    return UsageSyntheticsHour;
}());
exports.UsageSyntheticsHour = UsageSyntheticsHour;
//# sourceMappingURL=UsageSyntheticsHour.js.map