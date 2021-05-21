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
exports.SyntheticsLocation = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Synthetic location that can be used when creating or editing a test.
*/
var SyntheticsLocation = /** @class */ (function () {
    function SyntheticsLocation() {
    }
    SyntheticsLocation.getAttributeTypeMap = function () {
        return SyntheticsLocation.attributeTypeMap;
    };
    SyntheticsLocation.deserialize = function (data) {
        var res = new SyntheticsLocation();
        res.id = ObjectSerializer_1.ObjectSerializer.deserialize(data.id, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        return res;
    };
    SyntheticsLocation.serialize = function (data) {
        var attributeTypes = SyntheticsLocation.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.id = ObjectSerializer_1.ObjectSerializer.serialize(data.id, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        return res;
    };
    SyntheticsLocation.discriminator = undefined;
    SyntheticsLocation.attributeTypeMap = {
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    };
    return SyntheticsLocation;
}());
exports.SyntheticsLocation = SyntheticsLocation;
//# sourceMappingURL=SyntheticsLocation.js.map