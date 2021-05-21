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
exports.SecurityMonitoringRuleCase = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Case when signal is generated.
*/
var SecurityMonitoringRuleCase = /** @class */ (function () {
    function SecurityMonitoringRuleCase() {
    }
    SecurityMonitoringRuleCase.getAttributeTypeMap = function () {
        return SecurityMonitoringRuleCase.attributeTypeMap;
    };
    SecurityMonitoringRuleCase.deserialize = function (data) {
        var res = new SecurityMonitoringRuleCase();
        res.condition = ObjectSerializer_1.ObjectSerializer.deserialize(data.condition, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        res.notifications = ObjectSerializer_1.ObjectSerializer.deserialize(data.notifications, "Array<string>", "");
        if (['info', 'low', 'medium', 'high', 'critical', undefined].includes(data.status)) {
            res.status = data.status;
        }
        else {
            throw TypeError("invalid enum value " + data.status + " for status");
        }
        return res;
    };
    SecurityMonitoringRuleCase.serialize = function (data) {
        var attributeTypes = SecurityMonitoringRuleCase.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.condition = ObjectSerializer_1.ObjectSerializer.serialize(data.condition, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        res.notifications = ObjectSerializer_1.ObjectSerializer.serialize(data.notifications, "Array<string>", "");
        if (['info', 'low', 'medium', 'high', 'critical', undefined].includes(data.status)) {
            res.status = data.status;
        }
        else {
            throw TypeError("invalid enum value " + data.status + " for status");
        }
        return res;
    };
    SecurityMonitoringRuleCase.discriminator = undefined;
    SecurityMonitoringRuleCase.attributeTypeMap = {
        "condition": {
            "baseName": "condition",
            "type": "string",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "notifications": {
            "baseName": "notifications",
            "type": "Array<string>",
            "format": ""
        },
        "status": {
            "baseName": "status",
            "type": "SecurityMonitoringRuleSeverity",
            "format": ""
        }
    };
    return SecurityMonitoringRuleCase;
}());
exports.SecurityMonitoringRuleCase = SecurityMonitoringRuleCase;
//# sourceMappingURL=SecurityMonitoringRuleCase.js.map