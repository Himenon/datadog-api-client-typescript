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
exports.LogsGrokParserRules = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Set of rules for the grok parser.
*/
var LogsGrokParserRules = /** @class */ (function () {
    function LogsGrokParserRules() {
    }
    LogsGrokParserRules.getAttributeTypeMap = function () {
        return LogsGrokParserRules.attributeTypeMap;
    };
    LogsGrokParserRules.deserialize = function (data) {
        var res = new LogsGrokParserRules();
        if (data.match_rules === undefined) {
            throw new TypeError("missing required attribute 'match_rules' on 'LogsGrokParserRules' object");
        }
        res.matchRules = ObjectSerializer_1.ObjectSerializer.deserialize(data.match_rules, "string", "");
        res.supportRules = ObjectSerializer_1.ObjectSerializer.deserialize(data.support_rules, "string", "");
        return res;
    };
    LogsGrokParserRules.serialize = function (data) {
        var attributeTypes = LogsGrokParserRules.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.matchRules === undefined) {
            throw new TypeError("missing required attribute 'match_rules' on 'LogsGrokParserRules' object");
        }
        res.match_rules = ObjectSerializer_1.ObjectSerializer.serialize(data.matchRules, "string", "");
        res.support_rules = ObjectSerializer_1.ObjectSerializer.serialize(data.supportRules, "string", "");
        return res;
    };
    LogsGrokParserRules.discriminator = undefined;
    LogsGrokParserRules.attributeTypeMap = {
        "matchRules": {
            "baseName": "match_rules",
            "type": "string",
            "format": ""
        },
        "supportRules": {
            "baseName": "support_rules",
            "type": "string",
            "format": ""
        }
    };
    return LogsGrokParserRules;
}());
exports.LogsGrokParserRules = LogsGrokParserRules;
//# sourceMappingURL=LogsGrokParserRules.js.map