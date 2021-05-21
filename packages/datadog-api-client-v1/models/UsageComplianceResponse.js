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
exports.UsageComplianceResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The response containing the Compliance Monitoring usage for each hour for a given organization.
*/
var UsageComplianceResponse = /** @class */ (function () {
    function UsageComplianceResponse() {
    }
    UsageComplianceResponse.getAttributeTypeMap = function () {
        return UsageComplianceResponse.attributeTypeMap;
    };
    UsageComplianceResponse.deserialize = function (data) {
        var res = new UsageComplianceResponse();
        res.usage = ObjectSerializer_1.ObjectSerializer.deserialize(data.usage, "Array<UsageComplianceHour>", "");
        return res;
    };
    UsageComplianceResponse.serialize = function (data) {
        var attributeTypes = UsageComplianceResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.usage = ObjectSerializer_1.ObjectSerializer.serialize(data.usage, "Array<UsageComplianceHour>", "");
        return res;
    };
    UsageComplianceResponse.discriminator = undefined;
    UsageComplianceResponse.attributeTypeMap = {
        "usage": {
            "baseName": "usage",
            "type": "Array<UsageComplianceHour>",
            "format": ""
        }
    };
    return UsageComplianceResponse;
}());
exports.UsageComplianceResponse = UsageComplianceResponse;
//# sourceMappingURL=UsageComplianceResponse.js.map