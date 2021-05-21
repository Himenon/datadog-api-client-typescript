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
exports.MetricMetadata = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object with all metric related metadata.
*/
var MetricMetadata = /** @class */ (function () {
    function MetricMetadata() {
    }
    MetricMetadata.getAttributeTypeMap = function () {
        return MetricMetadata.attributeTypeMap;
    };
    MetricMetadata.deserialize = function (data) {
        var res = new MetricMetadata();
        res.description = ObjectSerializer_1.ObjectSerializer.deserialize(data.description, "string", "");
        res.integration = ObjectSerializer_1.ObjectSerializer.deserialize(data.integration, "string", "");
        res.perUnit = ObjectSerializer_1.ObjectSerializer.deserialize(data.per_unit, "string", "");
        res.shortName = ObjectSerializer_1.ObjectSerializer.deserialize(data.short_name, "string", "");
        res.statsdInterval = ObjectSerializer_1.ObjectSerializer.deserialize(data.statsd_interval, "number", "int64");
        res.type = ObjectSerializer_1.ObjectSerializer.deserialize(data.type, "string", "");
        res.unit = ObjectSerializer_1.ObjectSerializer.deserialize(data.unit, "string", "");
        return res;
    };
    MetricMetadata.serialize = function (data) {
        var attributeTypes = MetricMetadata.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.description = ObjectSerializer_1.ObjectSerializer.serialize(data.description, "string", "");
        res.integration = ObjectSerializer_1.ObjectSerializer.serialize(data.integration, "string", "");
        res.per_unit = ObjectSerializer_1.ObjectSerializer.serialize(data.perUnit, "string", "");
        res.short_name = ObjectSerializer_1.ObjectSerializer.serialize(data.shortName, "string", "");
        res.statsd_interval = ObjectSerializer_1.ObjectSerializer.serialize(data.statsdInterval, "number", "int64");
        res.type = ObjectSerializer_1.ObjectSerializer.serialize(data.type, "string", "");
        res.unit = ObjectSerializer_1.ObjectSerializer.serialize(data.unit, "string", "");
        return res;
    };
    MetricMetadata.discriminator = undefined;
    MetricMetadata.attributeTypeMap = {
        "description": {
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        "integration": {
            "baseName": "integration",
            "type": "string",
            "format": ""
        },
        "perUnit": {
            "baseName": "per_unit",
            "type": "string",
            "format": ""
        },
        "shortName": {
            "baseName": "short_name",
            "type": "string",
            "format": ""
        },
        "statsdInterval": {
            "baseName": "statsd_interval",
            "type": "number",
            "format": "int64"
        },
        "type": {
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        "unit": {
            "baseName": "unit",
            "type": "string",
            "format": ""
        }
    };
    return MetricMetadata;
}());
exports.MetricMetadata = MetricMetadata;
//# sourceMappingURL=MetricMetadata.js.map