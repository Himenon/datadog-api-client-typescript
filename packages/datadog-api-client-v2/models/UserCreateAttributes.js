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
exports.UserCreateAttributes = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Attributes of the created user.
*/
var UserCreateAttributes = /** @class */ (function () {
    function UserCreateAttributes() {
    }
    UserCreateAttributes.getAttributeTypeMap = function () {
        return UserCreateAttributes.attributeTypeMap;
    };
    UserCreateAttributes.deserialize = function (data) {
        var res = new UserCreateAttributes();
        if (data.email === undefined) {
            throw new TypeError("missing required attribute 'email' on 'UserCreateAttributes' object");
        }
        res.email = ObjectSerializer_1.ObjectSerializer.deserialize(data.email, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        res.title = ObjectSerializer_1.ObjectSerializer.deserialize(data.title, "string", "");
        return res;
    };
    UserCreateAttributes.serialize = function (data) {
        var attributeTypes = UserCreateAttributes.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.email === undefined) {
            throw new TypeError("missing required attribute 'email' on 'UserCreateAttributes' object");
        }
        res.email = ObjectSerializer_1.ObjectSerializer.serialize(data.email, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        res.title = ObjectSerializer_1.ObjectSerializer.serialize(data.title, "string", "");
        return res;
    };
    UserCreateAttributes.discriminator = undefined;
    UserCreateAttributes.attributeTypeMap = {
        "email": {
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "title": {
            "baseName": "title",
            "type": "string",
            "format": ""
        }
    };
    return UserCreateAttributes;
}());
exports.UserCreateAttributes = UserCreateAttributes;
//# sourceMappingURL=UserCreateAttributes.js.map