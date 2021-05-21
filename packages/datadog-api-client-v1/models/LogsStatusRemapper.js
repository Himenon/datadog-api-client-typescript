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
exports.LogsStatusRemapper = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Use this Processor if you want to assign some attributes as the official status.  Each incoming status value is mapped as follows.    - Integers from 0 to 7 map to the Syslog severity standards   - Strings beginning with `emerg` or f (case-insensitive) map to `emerg` (0)   - Strings beginning with `a` (case-insensitive) map to `alert` (1)   - Strings beginning with `c` (case-insensitive) map to `critical` (2)   - Strings beginning with `err` (case-insensitive) map to `error` (3)   - Strings beginning with `w` (case-insensitive) map to `warning` (4)   - Strings beginning with `n` (case-insensitive) map to `notice` (5)   - Strings beginning with `i` (case-insensitive) map to `info` (6)   - Strings beginning with `d`, `trace` or `verbose` (case-insensitive) map to `debug` (7)   - Strings beginning with `o` or matching `OK` or `Success` (case-insensitive) map to OK   - All others map to `info` (6)    **Note:** If multiple log status remapper processors can be applied to a given log,   only the first one (according to the pipelines order) is taken into account.
*/
var LogsStatusRemapper = /** @class */ (function () {
    function LogsStatusRemapper() {
    }
    LogsStatusRemapper.getAttributeTypeMap = function () {
        return LogsStatusRemapper.attributeTypeMap;
    };
    LogsStatusRemapper.deserialize = function (data) {
        var res = new LogsStatusRemapper();
        res.isEnabled = ObjectSerializer_1.ObjectSerializer.deserialize(data.is_enabled, "boolean", "");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        if (data.sources === undefined) {
            throw new TypeError("missing required attribute 'sources' on 'LogsStatusRemapper' object");
        }
        res.sources = ObjectSerializer_1.ObjectSerializer.deserialize(data.sources, "Array<string>", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'LogsStatusRemapper' object");
        }
        if (['status-remapper', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    LogsStatusRemapper.serialize = function (data) {
        var attributeTypes = LogsStatusRemapper.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.is_enabled = ObjectSerializer_1.ObjectSerializer.serialize(data.isEnabled, "boolean", "");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        if (data.sources === undefined) {
            throw new TypeError("missing required attribute 'sources' on 'LogsStatusRemapper' object");
        }
        res.sources = ObjectSerializer_1.ObjectSerializer.serialize(data.sources, "Array<string>", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'LogsStatusRemapper' object");
        }
        if (['status-remapper', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    LogsStatusRemapper.discriminator = undefined;
    LogsStatusRemapper.attributeTypeMap = {
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
        "sources": {
            "baseName": "sources",
            "type": "Array<string>",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "LogsStatusRemapperType",
            "format": ""
        }
    };
    return LogsStatusRemapper;
}());
exports.LogsStatusRemapper = LogsStatusRemapper;
//# sourceMappingURL=LogsStatusRemapper.js.map