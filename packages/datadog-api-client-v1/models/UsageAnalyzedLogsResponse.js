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
exports.UsageAnalyzedLogsResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A response containing the number of analyzed logs for each hour for a given organization.
*/
var UsageAnalyzedLogsResponse = /** @class */ (function () {
    function UsageAnalyzedLogsResponse() {
    }
    UsageAnalyzedLogsResponse.getAttributeTypeMap = function () {
        return UsageAnalyzedLogsResponse.attributeTypeMap;
    };
    UsageAnalyzedLogsResponse.deserialize = function (data) {
        var res = new UsageAnalyzedLogsResponse();
        res.usage = ObjectSerializer_1.ObjectSerializer.deserialize(data.usage, "Array<UsageAnalyzedLogsHour>", "");
        return res;
    };
    UsageAnalyzedLogsResponse.serialize = function (data) {
        var attributeTypes = UsageAnalyzedLogsResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.usage = ObjectSerializer_1.ObjectSerializer.serialize(data.usage, "Array<UsageAnalyzedLogsHour>", "");
        return res;
    };
    UsageAnalyzedLogsResponse.discriminator = undefined;
    UsageAnalyzedLogsResponse.attributeTypeMap = {
        "usage": {
            "baseName": "usage",
            "type": "Array<UsageAnalyzedLogsHour>",
            "format": ""
        }
    };
    return UsageAnalyzedLogsResponse;
}());
exports.UsageAnalyzedLogsResponse = UsageAnalyzedLogsResponse;
//# sourceMappingURL=UsageAnalyzedLogsResponse.js.map