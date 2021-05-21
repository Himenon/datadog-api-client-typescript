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
exports.SyntheticsAPITestResultShortResult = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Result of the last API test run.
*/
var SyntheticsAPITestResultShortResult = /** @class */ (function () {
    function SyntheticsAPITestResultShortResult() {
    }
    SyntheticsAPITestResultShortResult.getAttributeTypeMap = function () {
        return SyntheticsAPITestResultShortResult.attributeTypeMap;
    };
    SyntheticsAPITestResultShortResult.deserialize = function (data) {
        var res = new SyntheticsAPITestResultShortResult();
        res.passed = ObjectSerializer_1.ObjectSerializer.deserialize(data.passed, "boolean", "");
        res.timings = ObjectSerializer_1.ObjectSerializer.deserialize(data.timings, "SyntheticsTiming", "");
        return res;
    };
    SyntheticsAPITestResultShortResult.serialize = function (data) {
        var attributeTypes = SyntheticsAPITestResultShortResult.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.passed = ObjectSerializer_1.ObjectSerializer.serialize(data.passed, "boolean", "");
        res.timings = ObjectSerializer_1.ObjectSerializer.serialize(data.timings, "SyntheticsTiming", "");
        return res;
    };
    SyntheticsAPITestResultShortResult.discriminator = undefined;
    SyntheticsAPITestResultShortResult.attributeTypeMap = {
        "passed": {
            "baseName": "passed",
            "type": "boolean",
            "format": ""
        },
        "timings": {
            "baseName": "timings",
            "type": "SyntheticsTiming",
            "format": ""
        }
    };
    return SyntheticsAPITestResultShortResult;
}());
exports.SyntheticsAPITestResultShortResult = SyntheticsAPITestResultShortResult;
//# sourceMappingURL=SyntheticsAPITestResultShortResult.js.map