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
exports.SecurityMonitoringRuleUpdatePayload = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Update an existing rule.
*/
var SecurityMonitoringRuleUpdatePayload = /** @class */ (function () {
    function SecurityMonitoringRuleUpdatePayload() {
    }
    SecurityMonitoringRuleUpdatePayload.getAttributeTypeMap = function () {
        return SecurityMonitoringRuleUpdatePayload.attributeTypeMap;
    };
    SecurityMonitoringRuleUpdatePayload.deserialize = function (data) {
        var res = new SecurityMonitoringRuleUpdatePayload();
        res.cases = ObjectSerializer_1.ObjectSerializer.deserialize(data.cases, "Array<SecurityMonitoringRuleCase>", "");
        res.filters = ObjectSerializer_1.ObjectSerializer.deserialize(data.filters, "Array<SecurityMonitoringFilter>", "");
        res.isEnabled = ObjectSerializer_1.ObjectSerializer.deserialize(data.isEnabled, "boolean", "");
        res.message = ObjectSerializer_1.ObjectSerializer.deserialize(data.message, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        res.options = ObjectSerializer_1.ObjectSerializer.deserialize(data.options, "SecurityMonitoringRuleOptions", "");
        res.queries = ObjectSerializer_1.ObjectSerializer.deserialize(data.queries, "Array<SecurityMonitoringRuleQuery>", "");
        res.tags = ObjectSerializer_1.ObjectSerializer.deserialize(data.tags, "Array<string>", "");
        return res;
    };
    SecurityMonitoringRuleUpdatePayload.serialize = function (data) {
        var attributeTypes = SecurityMonitoringRuleUpdatePayload.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.cases = ObjectSerializer_1.ObjectSerializer.serialize(data.cases, "Array<SecurityMonitoringRuleCase>", "");
        res.filters = ObjectSerializer_1.ObjectSerializer.serialize(data.filters, "Array<SecurityMonitoringFilter>", "");
        res.isEnabled = ObjectSerializer_1.ObjectSerializer.serialize(data.isEnabled, "boolean", "");
        res.message = ObjectSerializer_1.ObjectSerializer.serialize(data.message, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        res.options = ObjectSerializer_1.ObjectSerializer.serialize(data.options, "SecurityMonitoringRuleOptions", "");
        res.queries = ObjectSerializer_1.ObjectSerializer.serialize(data.queries, "Array<SecurityMonitoringRuleQuery>", "");
        res.tags = ObjectSerializer_1.ObjectSerializer.serialize(data.tags, "Array<string>", "");
        return res;
    };
    SecurityMonitoringRuleUpdatePayload.discriminator = undefined;
    SecurityMonitoringRuleUpdatePayload.attributeTypeMap = {
        "cases": {
            "baseName": "cases",
            "type": "Array<SecurityMonitoringRuleCase>",
            "format": ""
        },
        "filters": {
            "baseName": "filters",
            "type": "Array<SecurityMonitoringFilter>",
            "format": ""
        },
        "isEnabled": {
            "baseName": "isEnabled",
            "type": "boolean",
            "format": ""
        },
        "message": {
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "options": {
            "baseName": "options",
            "type": "SecurityMonitoringRuleOptions",
            "format": ""
        },
        "queries": {
            "baseName": "queries",
            "type": "Array<SecurityMonitoringRuleQuery>",
            "format": ""
        },
        "tags": {
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        }
    };
    return SecurityMonitoringRuleUpdatePayload;
}());
exports.SecurityMonitoringRuleUpdatePayload = SecurityMonitoringRuleUpdatePayload;
//# sourceMappingURL=SecurityMonitoringRuleUpdatePayload.js.map