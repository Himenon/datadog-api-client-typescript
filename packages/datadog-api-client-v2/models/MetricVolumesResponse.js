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
exports.MetricVolumesResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Response object which includes a single metric's volume.
*/
var MetricVolumesResponse = /** @class */ (function () {
    function MetricVolumesResponse() {
    }
    MetricVolumesResponse.getAttributeTypeMap = function () {
        return MetricVolumesResponse.attributeTypeMap;
    };
    MetricVolumesResponse.deserialize = function (data) {
        var res = new MetricVolumesResponse();
        res.data = ObjectSerializer_1.ObjectSerializer.deserialize(data.data, "MetricVolumes", "");
        return res;
    };
    MetricVolumesResponse.serialize = function (data) {
        var attributeTypes = MetricVolumesResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.data = ObjectSerializer_1.ObjectSerializer.serialize(data.data, "MetricVolumes", "");
        return res;
    };
    MetricVolumesResponse.discriminator = undefined;
    MetricVolumesResponse.attributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "MetricVolumes",
            "format": ""
        }
    };
    return MetricVolumesResponse;
}());
exports.MetricVolumesResponse = MetricVolumesResponse;
//# sourceMappingURL=MetricVolumesResponse.js.map