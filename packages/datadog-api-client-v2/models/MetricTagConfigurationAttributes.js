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
exports.MetricTagConfigurationAttributes = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object containing the definition of a metric tag configuration attributes.
*/
var MetricTagConfigurationAttributes = /** @class */ (function () {
    function MetricTagConfigurationAttributes() {
    }
    MetricTagConfigurationAttributes.getAttributeTypeMap = function () {
        return MetricTagConfigurationAttributes.attributeTypeMap;
    };
    MetricTagConfigurationAttributes.deserialize = function (data) {
        var res = new MetricTagConfigurationAttributes();
        res.createdAt = ObjectSerializer_1.ObjectSerializer.deserialize(data.created_at, "Date", "date-time");
        res.includePercentiles = ObjectSerializer_1.ObjectSerializer.deserialize(data.include_percentiles, "boolean", "");
        if (['gauge', 'count', 'rate', 'distribution', undefined].includes(data.metric_type)) {
            res.metricType = data.metric_type;
        }
        else {
            throw TypeError("invalid enum value " + data.metric_type + " for metric_type");
        }
        res.modifiedAt = ObjectSerializer_1.ObjectSerializer.deserialize(data.modified_at, "Date", "date-time");
        res.tags = ObjectSerializer_1.ObjectSerializer.deserialize(data.tags, "Array<string>", "");
        return res;
    };
    MetricTagConfigurationAttributes.serialize = function (data) {
        var attributeTypes = MetricTagConfigurationAttributes.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.created_at = ObjectSerializer_1.ObjectSerializer.serialize(data.createdAt, "Date", "date-time");
        res.include_percentiles = ObjectSerializer_1.ObjectSerializer.serialize(data.includePercentiles, "boolean", "");
        if (['gauge', 'count', 'rate', 'distribution', undefined].includes(data.metricType)) {
            res.metric_type = data.metricType;
        }
        else {
            throw TypeError("invalid enum value " + data.metricType + " for metricType");
        }
        res.modified_at = ObjectSerializer_1.ObjectSerializer.serialize(data.modifiedAt, "Date", "date-time");
        res.tags = ObjectSerializer_1.ObjectSerializer.serialize(data.tags, "Array<string>", "");
        return res;
    };
    MetricTagConfigurationAttributes.discriminator = undefined;
    MetricTagConfigurationAttributes.attributeTypeMap = {
        "createdAt": {
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        "includePercentiles": {
            "baseName": "include_percentiles",
            "type": "boolean",
            "format": ""
        },
        "metricType": {
            "baseName": "metric_type",
            "type": "MetricTagConfigurationMetricTypes",
            "format": ""
        },
        "modifiedAt": {
            "baseName": "modified_at",
            "type": "Date",
            "format": "date-time"
        },
        "tags": {
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        }
    };
    return MetricTagConfigurationAttributes;
}());
exports.MetricTagConfigurationAttributes = MetricTagConfigurationAttributes;
//# sourceMappingURL=MetricTagConfigurationAttributes.js.map