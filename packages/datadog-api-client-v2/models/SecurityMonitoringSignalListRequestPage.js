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
exports.SecurityMonitoringSignalListRequestPage = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The paging attributes for listing security signals.
*/
var SecurityMonitoringSignalListRequestPage = /** @class */ (function () {
    function SecurityMonitoringSignalListRequestPage() {
    }
    SecurityMonitoringSignalListRequestPage.getAttributeTypeMap = function () {
        return SecurityMonitoringSignalListRequestPage.attributeTypeMap;
    };
    SecurityMonitoringSignalListRequestPage.deserialize = function (data) {
        var res = new SecurityMonitoringSignalListRequestPage();
        res.cursor = ObjectSerializer_1.ObjectSerializer.deserialize(data.cursor, "string", "");
        res.limit = ObjectSerializer_1.ObjectSerializer.deserialize(data.limit, "number", "int32");
        return res;
    };
    SecurityMonitoringSignalListRequestPage.serialize = function (data) {
        var attributeTypes = SecurityMonitoringSignalListRequestPage.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.cursor = ObjectSerializer_1.ObjectSerializer.serialize(data.cursor, "string", "");
        res.limit = ObjectSerializer_1.ObjectSerializer.serialize(data.limit, "number", "int32");
        return res;
    };
    SecurityMonitoringSignalListRequestPage.discriminator = undefined;
    SecurityMonitoringSignalListRequestPage.attributeTypeMap = {
        "cursor": {
            "baseName": "cursor",
            "type": "string",
            "format": ""
        },
        "limit": {
            "baseName": "limit",
            "type": "number",
            "format": "int32"
        }
    };
    return SecurityMonitoringSignalListRequestPage;
}());
exports.SecurityMonitoringSignalListRequestPage = SecurityMonitoringSignalListRequestPage;
//# sourceMappingURL=SecurityMonitoringSignalListRequestPage.js.map