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
exports.ApplicationKeyListResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* An application key response.
*/
var ApplicationKeyListResponse = /** @class */ (function () {
    function ApplicationKeyListResponse() {
    }
    ApplicationKeyListResponse.getAttributeTypeMap = function () {
        return ApplicationKeyListResponse.attributeTypeMap;
    };
    ApplicationKeyListResponse.deserialize = function (data) {
        var res = new ApplicationKeyListResponse();
        res.applicationKeys = ObjectSerializer_1.ObjectSerializer.deserialize(data.application_keys, "Array<ApplicationKey>", "");
        return res;
    };
    ApplicationKeyListResponse.serialize = function (data) {
        var attributeTypes = ApplicationKeyListResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.application_keys = ObjectSerializer_1.ObjectSerializer.serialize(data.applicationKeys, "Array<ApplicationKey>", "");
        return res;
    };
    ApplicationKeyListResponse.discriminator = undefined;
    ApplicationKeyListResponse.attributeTypeMap = {
        "applicationKeys": {
            "baseName": "application_keys",
            "type": "Array<ApplicationKey>",
            "format": ""
        }
    };
    return ApplicationKeyListResponse;
}());
exports.ApplicationKeyListResponse = ApplicationKeyListResponse;
//# sourceMappingURL=ApplicationKeyListResponse.js.map