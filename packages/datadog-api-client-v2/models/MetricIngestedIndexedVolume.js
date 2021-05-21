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
exports.MetricIngestedIndexedVolume = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object for a single metric's ingested and indexed volume.
*/
var MetricIngestedIndexedVolume = /** @class */ (function () {
    function MetricIngestedIndexedVolume() {
    }
    MetricIngestedIndexedVolume.getAttributeTypeMap = function () {
        return MetricIngestedIndexedVolume.attributeTypeMap;
    };
    MetricIngestedIndexedVolume.deserialize = function (data) {
        var res = new MetricIngestedIndexedVolume();
        res.attributes = ObjectSerializer_1.ObjectSerializer.deserialize(data.attributes, "MetricIngestedIndexedVolumeAttributes", "");
        res.id = ObjectSerializer_1.ObjectSerializer.deserialize(data.id, "string", "");
        if (['metric_volumes', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    MetricIngestedIndexedVolume.serialize = function (data) {
        var attributeTypes = MetricIngestedIndexedVolume.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.attributes = ObjectSerializer_1.ObjectSerializer.serialize(data.attributes, "MetricIngestedIndexedVolumeAttributes", "");
        res.id = ObjectSerializer_1.ObjectSerializer.serialize(data.id, "string", "");
        if (['metric_volumes', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    MetricIngestedIndexedVolume.discriminator = undefined;
    MetricIngestedIndexedVolume.attributeTypeMap = {
        "attributes": {
            "baseName": "attributes",
            "type": "MetricIngestedIndexedVolumeAttributes",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "MetricIngestedIndexedVolumeType",
            "format": ""
        }
    };
    return MetricIngestedIndexedVolume;
}());
exports.MetricIngestedIndexedVolume = MetricIngestedIndexedVolume;
//# sourceMappingURL=MetricIngestedIndexedVolume.js.map