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
exports.ApplicationKeyCreateData = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object used to create an application key.
*/
var ApplicationKeyCreateData = /** @class */ (function () {
    function ApplicationKeyCreateData() {
    }
    ApplicationKeyCreateData.getAttributeTypeMap = function () {
        return ApplicationKeyCreateData.attributeTypeMap;
    };
    ApplicationKeyCreateData.deserialize = function (data) {
        var res = new ApplicationKeyCreateData();
        if (data.attributes === undefined) {
            throw new TypeError("missing required attribute 'attributes' on 'ApplicationKeyCreateData' object");
        }
        res.attributes = ObjectSerializer_1.ObjectSerializer.deserialize(data.attributes, "ApplicationKeyCreateAttributes", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'ApplicationKeyCreateData' object");
        }
        if (['application_keys', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    ApplicationKeyCreateData.serialize = function (data) {
        var attributeTypes = ApplicationKeyCreateData.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.attributes === undefined) {
            throw new TypeError("missing required attribute 'attributes' on 'ApplicationKeyCreateData' object");
        }
        res.attributes = ObjectSerializer_1.ObjectSerializer.serialize(data.attributes, "ApplicationKeyCreateAttributes", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'ApplicationKeyCreateData' object");
        }
        if (['application_keys', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    ApplicationKeyCreateData.discriminator = undefined;
    ApplicationKeyCreateData.attributeTypeMap = {
        "attributes": {
            "baseName": "attributes",
            "type": "ApplicationKeyCreateAttributes",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "ApplicationKeysType",
            "format": ""
        }
    };
    return ApplicationKeyCreateData;
}());
exports.ApplicationKeyCreateData = ApplicationKeyCreateData;
//# sourceMappingURL=ApplicationKeyCreateData.js.map