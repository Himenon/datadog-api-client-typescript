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
exports.UserDisableResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Array of user disabled for a given organization.
*/
var UserDisableResponse = /** @class */ (function () {
    function UserDisableResponse() {
    }
    UserDisableResponse.getAttributeTypeMap = function () {
        return UserDisableResponse.attributeTypeMap;
    };
    UserDisableResponse.deserialize = function (data) {
        var res = new UserDisableResponse();
        res.message = ObjectSerializer_1.ObjectSerializer.deserialize(data.message, "string", "");
        return res;
    };
    UserDisableResponse.serialize = function (data) {
        var attributeTypes = UserDisableResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.message = ObjectSerializer_1.ObjectSerializer.serialize(data.message, "string", "");
        return res;
    };
    UserDisableResponse.discriminator = undefined;
    UserDisableResponse.attributeTypeMap = {
        "message": {
            "baseName": "message",
            "type": "string",
            "format": ""
        }
    };
    return UserDisableResponse;
}());
exports.UserDisableResponse = UserDisableResponse;
//# sourceMappingURL=UserDisableResponse.js.map