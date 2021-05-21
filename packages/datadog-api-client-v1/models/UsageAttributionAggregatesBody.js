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
exports.UsageAttributionAggregatesBody = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The object containing the aggregates.
*/
var UsageAttributionAggregatesBody = /** @class */ (function () {
    function UsageAttributionAggregatesBody() {
    }
    UsageAttributionAggregatesBody.getAttributeTypeMap = function () {
        return UsageAttributionAggregatesBody.attributeTypeMap;
    };
    UsageAttributionAggregatesBody.deserialize = function (data) {
        var res = new UsageAttributionAggregatesBody();
        res.aggType = ObjectSerializer_1.ObjectSerializer.deserialize(data.agg_type, "string", "");
        res.field = ObjectSerializer_1.ObjectSerializer.deserialize(data.field, "string", "");
        res.value = ObjectSerializer_1.ObjectSerializer.deserialize(data.value, "number", "double");
        return res;
    };
    UsageAttributionAggregatesBody.serialize = function (data) {
        var attributeTypes = UsageAttributionAggregatesBody.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.agg_type = ObjectSerializer_1.ObjectSerializer.serialize(data.aggType, "string", "");
        res.field = ObjectSerializer_1.ObjectSerializer.serialize(data.field, "string", "");
        res.value = ObjectSerializer_1.ObjectSerializer.serialize(data.value, "number", "double");
        return res;
    };
    UsageAttributionAggregatesBody.discriminator = undefined;
    UsageAttributionAggregatesBody.attributeTypeMap = {
        "aggType": {
            "baseName": "agg_type",
            "type": "string",
            "format": ""
        },
        "field": {
            "baseName": "field",
            "type": "string",
            "format": ""
        },
        "value": {
            "baseName": "value",
            "type": "number",
            "format": "double"
        }
    };
    return UsageAttributionAggregatesBody;
}());
exports.UsageAttributionAggregatesBody = UsageAttributionAggregatesBody;
//# sourceMappingURL=UsageAttributionAggregatesBody.js.map