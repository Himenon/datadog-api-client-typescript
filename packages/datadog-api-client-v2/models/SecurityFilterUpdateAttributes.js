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
exports.SecurityFilterUpdateAttributes = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The security filters properties to be updated.
*/
var SecurityFilterUpdateAttributes = /** @class */ (function () {
    function SecurityFilterUpdateAttributes() {
    }
    SecurityFilterUpdateAttributes.getAttributeTypeMap = function () {
        return SecurityFilterUpdateAttributes.attributeTypeMap;
    };
    SecurityFilterUpdateAttributes.deserialize = function (data) {
        var res = new SecurityFilterUpdateAttributes();
        res.exclusionFilters = ObjectSerializer_1.ObjectSerializer.deserialize(data.exclusion_filters, "Array<SecurityFilterExclusionFilter>", "");
        if (['logs', undefined].includes(data.filtered_data_type)) {
            res.filteredDataType = data.filtered_data_type;
        }
        else {
            throw TypeError("invalid enum value " + data.filtered_data_type + " for filtered_data_type");
        }
        res.isEnabled = ObjectSerializer_1.ObjectSerializer.deserialize(data.is_enabled, "boolean", "");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        res.query = ObjectSerializer_1.ObjectSerializer.deserialize(data.query, "string", "");
        res.version = ObjectSerializer_1.ObjectSerializer.deserialize(data.version, "number", "int32");
        return res;
    };
    SecurityFilterUpdateAttributes.serialize = function (data) {
        var attributeTypes = SecurityFilterUpdateAttributes.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.exclusion_filters = ObjectSerializer_1.ObjectSerializer.serialize(data.exclusionFilters, "Array<SecurityFilterExclusionFilter>", "");
        if (['logs', undefined].includes(data.filteredDataType)) {
            res.filtered_data_type = data.filteredDataType;
        }
        else {
            throw TypeError("invalid enum value " + data.filteredDataType + " for filteredDataType");
        }
        res.is_enabled = ObjectSerializer_1.ObjectSerializer.serialize(data.isEnabled, "boolean", "");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        res.query = ObjectSerializer_1.ObjectSerializer.serialize(data.query, "string", "");
        res.version = ObjectSerializer_1.ObjectSerializer.serialize(data.version, "number", "int32");
        return res;
    };
    SecurityFilterUpdateAttributes.discriminator = undefined;
    SecurityFilterUpdateAttributes.attributeTypeMap = {
        "exclusionFilters": {
            "baseName": "exclusion_filters",
            "type": "Array<SecurityFilterExclusionFilter>",
            "format": ""
        },
        "filteredDataType": {
            "baseName": "filtered_data_type",
            "type": "SecurityFilterFilteredDataType",
            "format": ""
        },
        "isEnabled": {
            "baseName": "is_enabled",
            "type": "boolean",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "query": {
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        "version": {
            "baseName": "version",
            "type": "number",
            "format": "int32"
        }
    };
    return SecurityFilterUpdateAttributes;
}());
exports.SecurityFilterUpdateAttributes = SecurityFilterUpdateAttributes;
//# sourceMappingURL=SecurityFilterUpdateAttributes.js.map