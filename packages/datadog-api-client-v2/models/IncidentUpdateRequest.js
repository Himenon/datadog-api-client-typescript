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
exports.IncidentUpdateRequest = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Update request for an incident.
*/
var IncidentUpdateRequest = /** @class */ (function () {
    function IncidentUpdateRequest() {
    }
    IncidentUpdateRequest.getAttributeTypeMap = function () {
        return IncidentUpdateRequest.attributeTypeMap;
    };
    IncidentUpdateRequest.deserialize = function (data) {
        var res = new IncidentUpdateRequest();
        if (data.data === undefined) {
            throw new TypeError("missing required attribute 'data' on 'IncidentUpdateRequest' object");
        }
        res.data = ObjectSerializer_1.ObjectSerializer.deserialize(data.data, "IncidentUpdateData", "");
        return res;
    };
    IncidentUpdateRequest.serialize = function (data) {
        var attributeTypes = IncidentUpdateRequest.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.data === undefined) {
            throw new TypeError("missing required attribute 'data' on 'IncidentUpdateRequest' object");
        }
        res.data = ObjectSerializer_1.ObjectSerializer.serialize(data.data, "IncidentUpdateData", "");
        return res;
    };
    IncidentUpdateRequest.discriminator = undefined;
    IncidentUpdateRequest.attributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "IncidentUpdateData",
            "format": ""
        }
    };
    return IncidentUpdateRequest;
}());
exports.IncidentUpdateRequest = IncidentUpdateRequest;
//# sourceMappingURL=IncidentUpdateRequest.js.map