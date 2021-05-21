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
exports.HostMetrics = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Host Metrics collected.
*/
var HostMetrics = /** @class */ (function () {
    function HostMetrics() {
    }
    HostMetrics.getAttributeTypeMap = function () {
        return HostMetrics.attributeTypeMap;
    };
    HostMetrics.deserialize = function (data) {
        var res = new HostMetrics();
        res.cpu = ObjectSerializer_1.ObjectSerializer.deserialize(data.cpu, "number", "double");
        res.iowait = ObjectSerializer_1.ObjectSerializer.deserialize(data.iowait, "number", "double");
        res.load = ObjectSerializer_1.ObjectSerializer.deserialize(data.load, "number", "double");
        return res;
    };
    HostMetrics.serialize = function (data) {
        var attributeTypes = HostMetrics.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.cpu = ObjectSerializer_1.ObjectSerializer.serialize(data.cpu, "number", "double");
        res.iowait = ObjectSerializer_1.ObjectSerializer.serialize(data.iowait, "number", "double");
        res.load = ObjectSerializer_1.ObjectSerializer.serialize(data.load, "number", "double");
        return res;
    };
    HostMetrics.discriminator = undefined;
    HostMetrics.attributeTypeMap = {
        "cpu": {
            "baseName": "cpu",
            "type": "number",
            "format": "double"
        },
        "iowait": {
            "baseName": "iowait",
            "type": "number",
            "format": "double"
        },
        "load": {
            "baseName": "load",
            "type": "number",
            "format": "double"
        }
    };
    return HostMetrics;
}());
exports.HostMetrics = HostMetrics;
//# sourceMappingURL=HostMetrics.js.map