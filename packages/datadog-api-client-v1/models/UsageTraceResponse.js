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
exports.UsageTraceResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A response containing trace usage.
*/
var UsageTraceResponse = /** @class */ (function () {
    function UsageTraceResponse() {
    }
    UsageTraceResponse.getAttributeTypeMap = function () {
        return UsageTraceResponse.attributeTypeMap;
    };
    UsageTraceResponse.deserialize = function (data) {
        var res = new UsageTraceResponse();
        res.usage = ObjectSerializer_1.ObjectSerializer.deserialize(data.usage, "Array<UsageTraceHour>", "");
        return res;
    };
    UsageTraceResponse.serialize = function (data) {
        var attributeTypes = UsageTraceResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.usage = ObjectSerializer_1.ObjectSerializer.serialize(data.usage, "Array<UsageTraceHour>", "");
        return res;
    };
    UsageTraceResponse.discriminator = undefined;
    UsageTraceResponse.attributeTypeMap = {
        "usage": {
            "baseName": "usage",
            "type": "Array<UsageTraceHour>",
            "format": ""
        }
    };
    return UsageTraceResponse;
}());
exports.UsageTraceResponse = UsageTraceResponse;
//# sourceMappingURL=UsageTraceResponse.js.map