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
exports.UserUpdateAttributes = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Attributes of the edited user.
*/
var UserUpdateAttributes = /** @class */ (function () {
    function UserUpdateAttributes() {
    }
    UserUpdateAttributes.getAttributeTypeMap = function () {
        return UserUpdateAttributes.attributeTypeMap;
    };
    UserUpdateAttributes.deserialize = function (data) {
        var res = new UserUpdateAttributes();
        res.disabled = ObjectSerializer_1.ObjectSerializer.deserialize(data.disabled, "boolean", "");
        res.email = ObjectSerializer_1.ObjectSerializer.deserialize(data.email, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        return res;
    };
    UserUpdateAttributes.serialize = function (data) {
        var attributeTypes = UserUpdateAttributes.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.disabled = ObjectSerializer_1.ObjectSerializer.serialize(data.disabled, "boolean", "");
        res.email = ObjectSerializer_1.ObjectSerializer.serialize(data.email, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        return res;
    };
    UserUpdateAttributes.discriminator = undefined;
    UserUpdateAttributes.attributeTypeMap = {
        "disabled": {
            "baseName": "disabled",
            "type": "boolean",
            "format": ""
        },
        "email": {
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    };
    return UserUpdateAttributes;
}());
exports.UserUpdateAttributes = UserUpdateAttributes;
//# sourceMappingURL=UserUpdateAttributes.js.map