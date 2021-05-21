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
exports.CheckCanDeleteMonitorResponseData = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Wrapper object with the list of monitor IDs.
*/
var CheckCanDeleteMonitorResponseData = /** @class */ (function () {
    function CheckCanDeleteMonitorResponseData() {
    }
    CheckCanDeleteMonitorResponseData.getAttributeTypeMap = function () {
        return CheckCanDeleteMonitorResponseData.attributeTypeMap;
    };
    CheckCanDeleteMonitorResponseData.deserialize = function (data) {
        var res = new CheckCanDeleteMonitorResponseData();
        res.ok = ObjectSerializer_1.ObjectSerializer.deserialize(data.ok, "Array<number>", "int64");
        return res;
    };
    CheckCanDeleteMonitorResponseData.serialize = function (data) {
        var attributeTypes = CheckCanDeleteMonitorResponseData.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.ok = ObjectSerializer_1.ObjectSerializer.serialize(data.ok, "Array<number>", "int64");
        return res;
    };
    CheckCanDeleteMonitorResponseData.discriminator = undefined;
    CheckCanDeleteMonitorResponseData.attributeTypeMap = {
        "ok": {
            "baseName": "ok",
            "type": "Array<number>",
            "format": "int64"
        }
    };
    return CheckCanDeleteMonitorResponseData;
}());
exports.CheckCanDeleteMonitorResponseData = CheckCanDeleteMonitorResponseData;
//# sourceMappingURL=CheckCanDeleteMonitorResponseData.js.map