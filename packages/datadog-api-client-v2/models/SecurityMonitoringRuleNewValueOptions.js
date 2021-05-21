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
exports.SecurityMonitoringRuleNewValueOptions = void 0;
/**
* Options on new value rules.
*/
var SecurityMonitoringRuleNewValueOptions = /** @class */ (function () {
    function SecurityMonitoringRuleNewValueOptions() {
    }
    SecurityMonitoringRuleNewValueOptions.getAttributeTypeMap = function () {
        return SecurityMonitoringRuleNewValueOptions.attributeTypeMap;
    };
    SecurityMonitoringRuleNewValueOptions.deserialize = function (data) {
        var res = new SecurityMonitoringRuleNewValueOptions();
        if ([1, 2, 7, 14, 21, 28, undefined].includes(data.forgetAfter)) {
            res.forgetAfter = data.forgetAfter;
        }
        else {
            throw TypeError("invalid enum value " + data.forgetAfter + " for forgetAfter");
        }
        if ([0, 1, 7, undefined].includes(data.learningDuration)) {
            res.learningDuration = data.learningDuration;
        }
        else {
            throw TypeError("invalid enum value " + data.learningDuration + " for learningDuration");
        }
        return res;
    };
    SecurityMonitoringRuleNewValueOptions.serialize = function (data) {
        var attributeTypes = SecurityMonitoringRuleNewValueOptions.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if ([1, 2, 7, 14, 21, 28, undefined].includes(data.forgetAfter)) {
            res.forgetAfter = data.forgetAfter;
        }
        else {
            throw TypeError("invalid enum value " + data.forgetAfter + " for forgetAfter");
        }
        if ([0, 1, 7, undefined].includes(data.learningDuration)) {
            res.learningDuration = data.learningDuration;
        }
        else {
            throw TypeError("invalid enum value " + data.learningDuration + " for learningDuration");
        }
        return res;
    };
    SecurityMonitoringRuleNewValueOptions.discriminator = undefined;
    SecurityMonitoringRuleNewValueOptions.attributeTypeMap = {
        "forgetAfter": {
            "baseName": "forgetAfter",
            "type": "SecurityMonitoringRuleNewValueOptionsForgetAfter",
            "format": ""
        },
        "learningDuration": {
            "baseName": "learningDuration",
            "type": "SecurityMonitoringRuleNewValueOptionsLearningDuration",
            "format": ""
        }
    };
    return SecurityMonitoringRuleNewValueOptions;
}());
exports.SecurityMonitoringRuleNewValueOptions = SecurityMonitoringRuleNewValueOptions;
//# sourceMappingURL=SecurityMonitoringRuleNewValueOptions.js.map