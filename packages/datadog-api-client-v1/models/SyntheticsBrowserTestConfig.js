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
exports.SyntheticsBrowserTestConfig = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Configuration object for a Synthetic browser test.
*/
var SyntheticsBrowserTestConfig = /** @class */ (function () {
    function SyntheticsBrowserTestConfig() {
    }
    SyntheticsBrowserTestConfig.getAttributeTypeMap = function () {
        return SyntheticsBrowserTestConfig.attributeTypeMap;
    };
    SyntheticsBrowserTestConfig.deserialize = function (data) {
        var res = new SyntheticsBrowserTestConfig();
        if (data.assertions === undefined) {
            throw new TypeError("missing required attribute 'assertions' on 'SyntheticsBrowserTestConfig' object");
        }
        res.assertions = ObjectSerializer_1.ObjectSerializer.deserialize(data.assertions, "Array<SyntheticsAssertion>", "");
        if (data.request === undefined) {
            throw new TypeError("missing required attribute 'request' on 'SyntheticsBrowserTestConfig' object");
        }
        res.request = ObjectSerializer_1.ObjectSerializer.deserialize(data.request, "SyntheticsTestRequest", "");
        res.setCookie = ObjectSerializer_1.ObjectSerializer.deserialize(data.setCookie, "string", "");
        res.variables = ObjectSerializer_1.ObjectSerializer.deserialize(data.variables, "Array<SyntheticsBrowserVariable>", "");
        return res;
    };
    SyntheticsBrowserTestConfig.serialize = function (data) {
        var attributeTypes = SyntheticsBrowserTestConfig.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.assertions === undefined) {
            throw new TypeError("missing required attribute 'assertions' on 'SyntheticsBrowserTestConfig' object");
        }
        res.assertions = ObjectSerializer_1.ObjectSerializer.serialize(data.assertions, "Array<SyntheticsAssertion>", "");
        if (data.request === undefined) {
            throw new TypeError("missing required attribute 'request' on 'SyntheticsBrowserTestConfig' object");
        }
        res.request = ObjectSerializer_1.ObjectSerializer.serialize(data.request, "SyntheticsTestRequest", "");
        res.setCookie = ObjectSerializer_1.ObjectSerializer.serialize(data.setCookie, "string", "");
        res.variables = ObjectSerializer_1.ObjectSerializer.serialize(data.variables, "Array<SyntheticsBrowserVariable>", "");
        return res;
    };
    SyntheticsBrowserTestConfig.discriminator = undefined;
    SyntheticsBrowserTestConfig.attributeTypeMap = {
        "assertions": {
            "baseName": "assertions",
            "type": "Array<SyntheticsAssertion>",
            "format": ""
        },
        "request": {
            "baseName": "request",
            "type": "SyntheticsTestRequest",
            "format": ""
        },
        "setCookie": {
            "baseName": "setCookie",
            "type": "string",
            "format": ""
        },
        "variables": {
            "baseName": "variables",
            "type": "Array<SyntheticsBrowserVariable>",
            "format": ""
        }
    };
    return SyntheticsBrowserTestConfig;
}());
exports.SyntheticsBrowserTestConfig = SyntheticsBrowserTestConfig;
//# sourceMappingURL=SyntheticsBrowserTestConfig.js.map