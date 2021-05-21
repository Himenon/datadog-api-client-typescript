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
exports.SyntheticsDeleteTestsPayload = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A JSON list of the ID or IDs of the Synthetic tests that you want to delete.
*/
var SyntheticsDeleteTestsPayload = /** @class */ (function () {
    function SyntheticsDeleteTestsPayload() {
    }
    SyntheticsDeleteTestsPayload.getAttributeTypeMap = function () {
        return SyntheticsDeleteTestsPayload.attributeTypeMap;
    };
    SyntheticsDeleteTestsPayload.deserialize = function (data) {
        var res = new SyntheticsDeleteTestsPayload();
        res.publicIds = ObjectSerializer_1.ObjectSerializer.deserialize(data.public_ids, "Array<string>", "");
        return res;
    };
    SyntheticsDeleteTestsPayload.serialize = function (data) {
        var attributeTypes = SyntheticsDeleteTestsPayload.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.public_ids = ObjectSerializer_1.ObjectSerializer.serialize(data.publicIds, "Array<string>", "");
        return res;
    };
    SyntheticsDeleteTestsPayload.discriminator = undefined;
    SyntheticsDeleteTestsPayload.attributeTypeMap = {
        "publicIds": {
            "baseName": "public_ids",
            "type": "Array<string>",
            "format": ""
        }
    };
    return SyntheticsDeleteTestsPayload;
}());
exports.SyntheticsDeleteTestsPayload = SyntheticsDeleteTestsPayload;
//# sourceMappingURL=SyntheticsDeleteTestsPayload.js.map