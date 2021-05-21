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
exports.SyntheticsBrowserTestResultFull = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object returned describing a browser test result.
*/
var SyntheticsBrowserTestResultFull = /** @class */ (function () {
    function SyntheticsBrowserTestResultFull() {
    }
    SyntheticsBrowserTestResultFull.getAttributeTypeMap = function () {
        return SyntheticsBrowserTestResultFull.attributeTypeMap;
    };
    SyntheticsBrowserTestResultFull.deserialize = function (data) {
        var res = new SyntheticsBrowserTestResultFull();
        res.check = ObjectSerializer_1.ObjectSerializer.deserialize(data.check, "SyntheticsBrowserTestResultFullCheck", "");
        res.checkTime = ObjectSerializer_1.ObjectSerializer.deserialize(data.check_time, "number", "double");
        res.checkVersion = ObjectSerializer_1.ObjectSerializer.deserialize(data.check_version, "number", "int64");
        res.probeDc = ObjectSerializer_1.ObjectSerializer.deserialize(data.probe_dc, "string", "");
        res.result = ObjectSerializer_1.ObjectSerializer.deserialize(data.result, "SyntheticsBrowserTestResultData", "");
        res.resultId = ObjectSerializer_1.ObjectSerializer.deserialize(data.result_id, "string", "");
        if ([0, 1, 2, undefined].includes(data.status)) {
            res.status = data.status;
        }
        else {
            throw TypeError("invalid enum value " + data.status + " for status");
        }
        return res;
    };
    SyntheticsBrowserTestResultFull.serialize = function (data) {
        var attributeTypes = SyntheticsBrowserTestResultFull.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.check = ObjectSerializer_1.ObjectSerializer.serialize(data.check, "SyntheticsBrowserTestResultFullCheck", "");
        res.check_time = ObjectSerializer_1.ObjectSerializer.serialize(data.checkTime, "number", "double");
        res.check_version = ObjectSerializer_1.ObjectSerializer.serialize(data.checkVersion, "number", "int64");
        res.probe_dc = ObjectSerializer_1.ObjectSerializer.serialize(data.probeDc, "string", "");
        res.result = ObjectSerializer_1.ObjectSerializer.serialize(data.result, "SyntheticsBrowserTestResultData", "");
        res.result_id = ObjectSerializer_1.ObjectSerializer.serialize(data.resultId, "string", "");
        if ([0, 1, 2, undefined].includes(data.status)) {
            res.status = data.status;
        }
        else {
            throw TypeError("invalid enum value " + data.status + " for status");
        }
        return res;
    };
    SyntheticsBrowserTestResultFull.discriminator = undefined;
    SyntheticsBrowserTestResultFull.attributeTypeMap = {
        "check": {
            "baseName": "check",
            "type": "SyntheticsBrowserTestResultFullCheck",
            "format": ""
        },
        "checkTime": {
            "baseName": "check_time",
            "type": "number",
            "format": "double"
        },
        "checkVersion": {
            "baseName": "check_version",
            "type": "number",
            "format": "int64"
        },
        "probeDc": {
            "baseName": "probe_dc",
            "type": "string",
            "format": ""
        },
        "result": {
            "baseName": "result",
            "type": "SyntheticsBrowserTestResultData",
            "format": ""
        },
        "resultId": {
            "baseName": "result_id",
            "type": "string",
            "format": ""
        },
        "status": {
            "baseName": "status",
            "type": "SyntheticsTestMonitorStatus",
            "format": ""
        }
    };
    return SyntheticsBrowserTestResultFull;
}());
exports.SyntheticsBrowserTestResultFull = SyntheticsBrowserTestResultFull;
//# sourceMappingURL=SyntheticsBrowserTestResultFull.js.map