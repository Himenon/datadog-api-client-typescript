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
exports.ApplicationKeyCreateRequest = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Request used to create an application key.
*/
var ApplicationKeyCreateRequest = /** @class */ (function () {
    function ApplicationKeyCreateRequest() {
    }
    ApplicationKeyCreateRequest.getAttributeTypeMap = function () {
        return ApplicationKeyCreateRequest.attributeTypeMap;
    };
    ApplicationKeyCreateRequest.deserialize = function (data) {
        var res = new ApplicationKeyCreateRequest();
        if (data.data === undefined) {
            throw new TypeError("missing required attribute 'data' on 'ApplicationKeyCreateRequest' object");
        }
        res.data = ObjectSerializer_1.ObjectSerializer.deserialize(data.data, "ApplicationKeyCreateData", "");
        return res;
    };
    ApplicationKeyCreateRequest.serialize = function (data) {
        var attributeTypes = ApplicationKeyCreateRequest.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.data === undefined) {
            throw new TypeError("missing required attribute 'data' on 'ApplicationKeyCreateRequest' object");
        }
        res.data = ObjectSerializer_1.ObjectSerializer.serialize(data.data, "ApplicationKeyCreateData", "");
        return res;
    };
    ApplicationKeyCreateRequest.discriminator = undefined;
    ApplicationKeyCreateRequest.attributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "ApplicationKeyCreateData",
            "format": ""
        }
    };
    return ApplicationKeyCreateRequest;
}());
exports.ApplicationKeyCreateRequest = ApplicationKeyCreateRequest;
//# sourceMappingURL=ApplicationKeyCreateRequest.js.map