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
exports.UsageCustomReportsMeta = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The object containing document metadata.
*/
var UsageCustomReportsMeta = /** @class */ (function () {
    function UsageCustomReportsMeta() {
    }
    UsageCustomReportsMeta.getAttributeTypeMap = function () {
        return UsageCustomReportsMeta.attributeTypeMap;
    };
    UsageCustomReportsMeta.deserialize = function (data) {
        var res = new UsageCustomReportsMeta();
        res.page = ObjectSerializer_1.ObjectSerializer.deserialize(data.page, "UsageCustomReportsPage", "");
        return res;
    };
    UsageCustomReportsMeta.serialize = function (data) {
        var attributeTypes = UsageCustomReportsMeta.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.page = ObjectSerializer_1.ObjectSerializer.serialize(data.page, "UsageCustomReportsPage", "");
        return res;
    };
    UsageCustomReportsMeta.discriminator = undefined;
    UsageCustomReportsMeta.attributeTypeMap = {
        "page": {
            "baseName": "page",
            "type": "UsageCustomReportsPage",
            "format": ""
        }
    };
    return UsageCustomReportsMeta;
}());
exports.UsageCustomReportsMeta = UsageCustomReportsMeta;
//# sourceMappingURL=UsageCustomReportsMeta.js.map