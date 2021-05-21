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
exports.UsageCustomReportsPage = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The object containing page total count.
*/
var UsageCustomReportsPage = /** @class */ (function () {
    function UsageCustomReportsPage() {
    }
    UsageCustomReportsPage.getAttributeTypeMap = function () {
        return UsageCustomReportsPage.attributeTypeMap;
    };
    UsageCustomReportsPage.deserialize = function (data) {
        var res = new UsageCustomReportsPage();
        res.totalCount = ObjectSerializer_1.ObjectSerializer.deserialize(data.total_count, "number", "int64");
        return res;
    };
    UsageCustomReportsPage.serialize = function (data) {
        var attributeTypes = UsageCustomReportsPage.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.total_count = ObjectSerializer_1.ObjectSerializer.serialize(data.totalCount, "number", "int64");
        return res;
    };
    UsageCustomReportsPage.discriminator = undefined;
    UsageCustomReportsPage.attributeTypeMap = {
        "totalCount": {
            "baseName": "total_count",
            "type": "number",
            "format": "int64"
        }
    };
    return UsageCustomReportsPage;
}());
exports.UsageCustomReportsPage = UsageCustomReportsPage;
//# sourceMappingURL=UsageCustomReportsPage.js.map