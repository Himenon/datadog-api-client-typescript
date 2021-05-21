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
exports.LogsGroupByHistogram = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Used to perform a histogram computation (only for measure facets). Note: At most 100 buckets are allowed, the number of buckets is (max - min)/interval.
*/
var LogsGroupByHistogram = /** @class */ (function () {
    function LogsGroupByHistogram() {
    }
    LogsGroupByHistogram.getAttributeTypeMap = function () {
        return LogsGroupByHistogram.attributeTypeMap;
    };
    LogsGroupByHistogram.deserialize = function (data) {
        var res = new LogsGroupByHistogram();
        if (data.interval === undefined) {
            throw new TypeError("missing required attribute 'interval' on 'LogsGroupByHistogram' object");
        }
        res.interval = ObjectSerializer_1.ObjectSerializer.deserialize(data.interval, "number", "double");
        if (data.max === undefined) {
            throw new TypeError("missing required attribute 'max' on 'LogsGroupByHistogram' object");
        }
        res.max = ObjectSerializer_1.ObjectSerializer.deserialize(data.max, "number", "double");
        if (data.min === undefined) {
            throw new TypeError("missing required attribute 'min' on 'LogsGroupByHistogram' object");
        }
        res.min = ObjectSerializer_1.ObjectSerializer.deserialize(data.min, "number", "double");
        return res;
    };
    LogsGroupByHistogram.serialize = function (data) {
        var attributeTypes = LogsGroupByHistogram.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.interval === undefined) {
            throw new TypeError("missing required attribute 'interval' on 'LogsGroupByHistogram' object");
        }
        res.interval = ObjectSerializer_1.ObjectSerializer.serialize(data.interval, "number", "double");
        if (data.max === undefined) {
            throw new TypeError("missing required attribute 'max' on 'LogsGroupByHistogram' object");
        }
        res.max = ObjectSerializer_1.ObjectSerializer.serialize(data.max, "number", "double");
        if (data.min === undefined) {
            throw new TypeError("missing required attribute 'min' on 'LogsGroupByHistogram' object");
        }
        res.min = ObjectSerializer_1.ObjectSerializer.serialize(data.min, "number", "double");
        return res;
    };
    LogsGroupByHistogram.discriminator = undefined;
    LogsGroupByHistogram.attributeTypeMap = {
        "interval": {
            "baseName": "interval",
            "type": "number",
            "format": "double"
        },
        "max": {
            "baseName": "max",
            "type": "number",
            "format": "double"
        },
        "min": {
            "baseName": "min",
            "type": "number",
            "format": "double"
        }
    };
    return LogsGroupByHistogram;
}());
exports.LogsGroupByHistogram = LogsGroupByHistogram;
//# sourceMappingURL=LogsGroupByHistogram.js.map