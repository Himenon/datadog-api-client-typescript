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
exports.APIKeyUpdateRequest = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Request used to update an API key.
*/
var APIKeyUpdateRequest = /** @class */ (function () {
    function APIKeyUpdateRequest() {
    }
    APIKeyUpdateRequest.getAttributeTypeMap = function () {
        return APIKeyUpdateRequest.attributeTypeMap;
    };
    APIKeyUpdateRequest.deserialize = function (data) {
        var res = new APIKeyUpdateRequest();
        if (data.data === undefined) {
            throw new TypeError("missing required attribute 'data' on 'APIKeyUpdateRequest' object");
        }
        res.data = ObjectSerializer_1.ObjectSerializer.deserialize(data.data, "APIKeyUpdateData", "");
        return res;
    };
    APIKeyUpdateRequest.serialize = function (data) {
        var attributeTypes = APIKeyUpdateRequest.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.data === undefined) {
            throw new TypeError("missing required attribute 'data' on 'APIKeyUpdateRequest' object");
        }
        res.data = ObjectSerializer_1.ObjectSerializer.serialize(data.data, "APIKeyUpdateData", "");
        return res;
    };
    APIKeyUpdateRequest.discriminator = undefined;
    APIKeyUpdateRequest.attributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "APIKeyUpdateData",
            "format": ""
        }
    };
    return APIKeyUpdateRequest;
}());
exports.APIKeyUpdateRequest = APIKeyUpdateRequest;
//# sourceMappingURL=APIKeyUpdateRequest.js.map