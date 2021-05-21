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
exports.IntakePayloadAccepted = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The payload accepted for intake.
*/
var IntakePayloadAccepted = /** @class */ (function () {
    function IntakePayloadAccepted() {
    }
    IntakePayloadAccepted.getAttributeTypeMap = function () {
        return IntakePayloadAccepted.attributeTypeMap;
    };
    IntakePayloadAccepted.deserialize = function (data) {
        var res = new IntakePayloadAccepted();
        res.status = ObjectSerializer_1.ObjectSerializer.deserialize(data.status, "string", "");
        return res;
    };
    IntakePayloadAccepted.serialize = function (data) {
        var attributeTypes = IntakePayloadAccepted.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.status = ObjectSerializer_1.ObjectSerializer.serialize(data.status, "string", "");
        return res;
    };
    IntakePayloadAccepted.discriminator = undefined;
    IntakePayloadAccepted.attributeTypeMap = {
        "status": {
            "baseName": "status",
            "type": "string",
            "format": ""
        }
    };
    return IntakePayloadAccepted;
}());
exports.IntakePayloadAccepted = IntakePayloadAccepted;
//# sourceMappingURL=IntakePayloadAccepted.js.map