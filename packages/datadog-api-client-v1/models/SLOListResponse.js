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
exports.SLOListResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A response with one or more service level objective.
*/
var SLOListResponse = /** @class */ (function () {
    function SLOListResponse() {
    }
    SLOListResponse.getAttributeTypeMap = function () {
        return SLOListResponse.attributeTypeMap;
    };
    SLOListResponse.deserialize = function (data) {
        var res = new SLOListResponse();
        res.data = ObjectSerializer_1.ObjectSerializer.deserialize(data.data, "Array<ServiceLevelObjective>", "");
        res.errors = ObjectSerializer_1.ObjectSerializer.deserialize(data.errors, "Array<string>", "");
        res.metadata = ObjectSerializer_1.ObjectSerializer.deserialize(data.metadata, "SLOListResponseMetadata", "");
        return res;
    };
    SLOListResponse.serialize = function (data) {
        var attributeTypes = SLOListResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.data = ObjectSerializer_1.ObjectSerializer.serialize(data.data, "Array<ServiceLevelObjective>", "");
        res.errors = ObjectSerializer_1.ObjectSerializer.serialize(data.errors, "Array<string>", "");
        res.metadata = ObjectSerializer_1.ObjectSerializer.serialize(data.metadata, "SLOListResponseMetadata", "");
        return res;
    };
    SLOListResponse.discriminator = undefined;
    SLOListResponse.attributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "Array<ServiceLevelObjective>",
            "format": ""
        },
        "errors": {
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        },
        "metadata": {
            "baseName": "metadata",
            "type": "SLOListResponseMetadata",
            "format": ""
        }
    };
    return SLOListResponse;
}());
exports.SLOListResponse = SLOListResponse;
//# sourceMappingURL=SLOListResponse.js.map