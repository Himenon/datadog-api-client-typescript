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
exports.SyntheticsConfigVariable = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object defining a variable that can be used in your test configuration.
*/
var SyntheticsConfigVariable = /** @class */ (function () {
    function SyntheticsConfigVariable() {
    }
    SyntheticsConfigVariable.getAttributeTypeMap = function () {
        return SyntheticsConfigVariable.attributeTypeMap;
    };
    SyntheticsConfigVariable.deserialize = function (data) {
        var res = new SyntheticsConfigVariable();
        if (data.example === undefined) {
            throw new TypeError("missing required attribute 'example' on 'SyntheticsConfigVariable' object");
        }
        res.example = ObjectSerializer_1.ObjectSerializer.deserialize(data.example, "string", "");
        if (data.name === undefined) {
            throw new TypeError("missing required attribute 'name' on 'SyntheticsConfigVariable' object");
        }
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        res.pattern = ObjectSerializer_1.ObjectSerializer.deserialize(data.pattern, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'SyntheticsConfigVariable' object");
        }
        if (['text', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    SyntheticsConfigVariable.serialize = function (data) {
        var attributeTypes = SyntheticsConfigVariable.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.example === undefined) {
            throw new TypeError("missing required attribute 'example' on 'SyntheticsConfigVariable' object");
        }
        res.example = ObjectSerializer_1.ObjectSerializer.serialize(data.example, "string", "");
        if (data.name === undefined) {
            throw new TypeError("missing required attribute 'name' on 'SyntheticsConfigVariable' object");
        }
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        res.pattern = ObjectSerializer_1.ObjectSerializer.serialize(data.pattern, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'SyntheticsConfigVariable' object");
        }
        if (['text', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    SyntheticsConfigVariable.discriminator = undefined;
    SyntheticsConfigVariable.attributeTypeMap = {
        "example": {
            "baseName": "example",
            "type": "string",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "pattern": {
            "baseName": "pattern",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "SyntheticsConfigVariableType",
            "format": ""
        }
    };
    return SyntheticsConfigVariable;
}());
exports.SyntheticsConfigVariable = SyntheticsConfigVariable;
//# sourceMappingURL=SyntheticsConfigVariable.js.map