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
exports.AWSAccountListResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* List of enabled AWS accounts.
*/
var AWSAccountListResponse = /** @class */ (function () {
    function AWSAccountListResponse() {
    }
    AWSAccountListResponse.getAttributeTypeMap = function () {
        return AWSAccountListResponse.attributeTypeMap;
    };
    AWSAccountListResponse.deserialize = function (data) {
        var res = new AWSAccountListResponse();
        res.accounts = ObjectSerializer_1.ObjectSerializer.deserialize(data.accounts, "Array<AWSAccount>", "");
        return res;
    };
    AWSAccountListResponse.serialize = function (data) {
        var attributeTypes = AWSAccountListResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.accounts = ObjectSerializer_1.ObjectSerializer.serialize(data.accounts, "Array<AWSAccount>", "");
        return res;
    };
    AWSAccountListResponse.discriminator = undefined;
    AWSAccountListResponse.attributeTypeMap = {
        "accounts": {
            "baseName": "accounts",
            "type": "Array<AWSAccount>",
            "format": ""
        }
    };
    return AWSAccountListResponse;
}());
exports.AWSAccountListResponse = AWSAccountListResponse;
//# sourceMappingURL=AWSAccountListResponse.js.map