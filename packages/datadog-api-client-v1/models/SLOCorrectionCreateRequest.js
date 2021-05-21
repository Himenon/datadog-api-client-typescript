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
exports.SLOCorrectionCreateRequest = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* An object that defines a correction to be applied to an SLO
*/
var SLOCorrectionCreateRequest = /** @class */ (function () {
    function SLOCorrectionCreateRequest() {
    }
    SLOCorrectionCreateRequest.getAttributeTypeMap = function () {
        return SLOCorrectionCreateRequest.attributeTypeMap;
    };
    SLOCorrectionCreateRequest.deserialize = function (data) {
        var res = new SLOCorrectionCreateRequest();
        res.data = ObjectSerializer_1.ObjectSerializer.deserialize(data.data, "SLOCorrectionCreateData", "");
        return res;
    };
    SLOCorrectionCreateRequest.serialize = function (data) {
        var attributeTypes = SLOCorrectionCreateRequest.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.data = ObjectSerializer_1.ObjectSerializer.serialize(data.data, "SLOCorrectionCreateData", "");
        return res;
    };
    SLOCorrectionCreateRequest.discriminator = undefined;
    SLOCorrectionCreateRequest.attributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "SLOCorrectionCreateData",
            "format": ""
        }
    };
    return SLOCorrectionCreateRequest;
}());
exports.SLOCorrectionCreateRequest = SLOCorrectionCreateRequest;
//# sourceMappingURL=SLOCorrectionCreateRequest.js.map