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
exports.UsageSpecifiedCustomReportsAttributes = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The response containing attributes for specified custom reports.
*/
var UsageSpecifiedCustomReportsAttributes = /** @class */ (function () {
    function UsageSpecifiedCustomReportsAttributes() {
    }
    UsageSpecifiedCustomReportsAttributes.getAttributeTypeMap = function () {
        return UsageSpecifiedCustomReportsAttributes.attributeTypeMap;
    };
    UsageSpecifiedCustomReportsAttributes.deserialize = function (data) {
        var res = new UsageSpecifiedCustomReportsAttributes();
        res.computedOn = ObjectSerializer_1.ObjectSerializer.deserialize(data.computed_on, "string", "");
        res.endDate = ObjectSerializer_1.ObjectSerializer.deserialize(data.end_date, "string", "");
        res.location = ObjectSerializer_1.ObjectSerializer.deserialize(data.location, "string", "");
        res.size = ObjectSerializer_1.ObjectSerializer.deserialize(data.size, "number", "int64");
        res.startDate = ObjectSerializer_1.ObjectSerializer.deserialize(data.start_date, "string", "");
        res.tags = ObjectSerializer_1.ObjectSerializer.deserialize(data.tags, "Array<string>", "");
        return res;
    };
    UsageSpecifiedCustomReportsAttributes.serialize = function (data) {
        var attributeTypes = UsageSpecifiedCustomReportsAttributes.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.computed_on = ObjectSerializer_1.ObjectSerializer.serialize(data.computedOn, "string", "");
        res.end_date = ObjectSerializer_1.ObjectSerializer.serialize(data.endDate, "string", "");
        res.location = ObjectSerializer_1.ObjectSerializer.serialize(data.location, "string", "");
        res.size = ObjectSerializer_1.ObjectSerializer.serialize(data.size, "number", "int64");
        res.start_date = ObjectSerializer_1.ObjectSerializer.serialize(data.startDate, "string", "");
        res.tags = ObjectSerializer_1.ObjectSerializer.serialize(data.tags, "Array<string>", "");
        return res;
    };
    UsageSpecifiedCustomReportsAttributes.discriminator = undefined;
    UsageSpecifiedCustomReportsAttributes.attributeTypeMap = {
        "computedOn": {
            "baseName": "computed_on",
            "type": "string",
            "format": ""
        },
        "endDate": {
            "baseName": "end_date",
            "type": "string",
            "format": ""
        },
        "location": {
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        "size": {
            "baseName": "size",
            "type": "number",
            "format": "int64"
        },
        "startDate": {
            "baseName": "start_date",
            "type": "string",
            "format": ""
        },
        "tags": {
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        }
    };
    return UsageSpecifiedCustomReportsAttributes;
}());
exports.UsageSpecifiedCustomReportsAttributes = UsageSpecifiedCustomReportsAttributes;
//# sourceMappingURL=UsageSpecifiedCustomReportsAttributes.js.map