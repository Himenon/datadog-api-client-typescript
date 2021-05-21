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
exports.UsageAttributionMetadata = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The object containing document metadata.
*/
var UsageAttributionMetadata = /** @class */ (function () {
    function UsageAttributionMetadata() {
    }
    UsageAttributionMetadata.getAttributeTypeMap = function () {
        return UsageAttributionMetadata.attributeTypeMap;
    };
    UsageAttributionMetadata.deserialize = function (data) {
        var res = new UsageAttributionMetadata();
        res.aggregates = ObjectSerializer_1.ObjectSerializer.deserialize(data.aggregates, "Array<UsageAttributionAggregatesBody>", "");
        res.pagination = ObjectSerializer_1.ObjectSerializer.deserialize(data.pagination, "UsageAttributionPagination", "");
        return res;
    };
    UsageAttributionMetadata.serialize = function (data) {
        var attributeTypes = UsageAttributionMetadata.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.aggregates = ObjectSerializer_1.ObjectSerializer.serialize(data.aggregates, "Array<UsageAttributionAggregatesBody>", "");
        res.pagination = ObjectSerializer_1.ObjectSerializer.serialize(data.pagination, "UsageAttributionPagination", "");
        return res;
    };
    UsageAttributionMetadata.discriminator = undefined;
    UsageAttributionMetadata.attributeTypeMap = {
        "aggregates": {
            "baseName": "aggregates",
            "type": "Array<UsageAttributionAggregatesBody>",
            "format": ""
        },
        "pagination": {
            "baseName": "pagination",
            "type": "UsageAttributionPagination",
            "format": ""
        }
    };
    return UsageAttributionMetadata;
}());
exports.UsageAttributionMetadata = UsageAttributionMetadata;
//# sourceMappingURL=UsageAttributionMetadata.js.map