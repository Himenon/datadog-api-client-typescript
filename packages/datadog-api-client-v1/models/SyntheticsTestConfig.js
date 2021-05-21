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
exports.SyntheticsTestConfig = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Configuration object for a Synthetic test.
*/
var SyntheticsTestConfig = /** @class */ (function () {
    function SyntheticsTestConfig() {
    }
    SyntheticsTestConfig.getAttributeTypeMap = function () {
        return SyntheticsTestConfig.attributeTypeMap;
    };
    SyntheticsTestConfig.deserialize = function (data) {
        var res = new SyntheticsTestConfig();
        if (data.assertions === undefined) {
            throw new TypeError("missing required attribute 'assertions' on 'SyntheticsTestConfig' object");
        }
        res.assertions = ObjectSerializer_1.ObjectSerializer.deserialize(data.assertions, "Array<SyntheticsAssertion>", "");
        res.configVariables = ObjectSerializer_1.ObjectSerializer.deserialize(data.configVariables, "Array<SyntheticsConfigVariable>", "");
        res.request = ObjectSerializer_1.ObjectSerializer.deserialize(data.request, "SyntheticsTestRequest", "");
        res.variables = ObjectSerializer_1.ObjectSerializer.deserialize(data.variables, "Array<SyntheticsBrowserVariable>", "");
        return res;
    };
    SyntheticsTestConfig.serialize = function (data) {
        var attributeTypes = SyntheticsTestConfig.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.assertions === undefined) {
            throw new TypeError("missing required attribute 'assertions' on 'SyntheticsTestConfig' object");
        }
        res.assertions = ObjectSerializer_1.ObjectSerializer.serialize(data.assertions, "Array<SyntheticsAssertion>", "");
        res.configVariables = ObjectSerializer_1.ObjectSerializer.serialize(data.configVariables, "Array<SyntheticsConfigVariable>", "");
        res.request = ObjectSerializer_1.ObjectSerializer.serialize(data.request, "SyntheticsTestRequest", "");
        res.variables = ObjectSerializer_1.ObjectSerializer.serialize(data.variables, "Array<SyntheticsBrowserVariable>", "");
        return res;
    };
    SyntheticsTestConfig.discriminator = undefined;
    SyntheticsTestConfig.attributeTypeMap = {
        "assertions": {
            "baseName": "assertions",
            "type": "Array<SyntheticsAssertion>",
            "format": ""
        },
        "configVariables": {
            "baseName": "configVariables",
            "type": "Array<SyntheticsConfigVariable>",
            "format": ""
        },
        "request": {
            "baseName": "request",
            "type": "SyntheticsTestRequest",
            "format": ""
        },
        "variables": {
            "baseName": "variables",
            "type": "Array<SyntheticsBrowserVariable>",
            "format": ""
        }
    };
    return SyntheticsTestConfig;
}());
exports.SyntheticsTestConfig = SyntheticsTestConfig;
//# sourceMappingURL=SyntheticsTestConfig.js.map