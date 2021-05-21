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
exports.LogsTraceRemapper = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* There are two ways to improve correlation between application traces and logs.    1. Follow the documentation on [how to inject a trace ID in the application logs](https://docs.datadoghq.com/tracing/connect_logs_and_traces)   and by default log integrations take care of all the rest of the setup.    2. Use the Trace remapper processor to define a log attribute as its associated trace ID.
*/
var LogsTraceRemapper = /** @class */ (function () {
    function LogsTraceRemapper() {
    }
    LogsTraceRemapper.getAttributeTypeMap = function () {
        return LogsTraceRemapper.attributeTypeMap;
    };
    LogsTraceRemapper.deserialize = function (data) {
        var res = new LogsTraceRemapper();
        res.isEnabled = ObjectSerializer_1.ObjectSerializer.deserialize(data.is_enabled, "boolean", "");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        res.sources = ObjectSerializer_1.ObjectSerializer.deserialize(data.sources, "Array<string>", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'LogsTraceRemapper' object");
        }
        if (['trace-id-remapper', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    LogsTraceRemapper.serialize = function (data) {
        var attributeTypes = LogsTraceRemapper.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.is_enabled = ObjectSerializer_1.ObjectSerializer.serialize(data.isEnabled, "boolean", "");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        res.sources = ObjectSerializer_1.ObjectSerializer.serialize(data.sources, "Array<string>", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'LogsTraceRemapper' object");
        }
        if (['trace-id-remapper', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    LogsTraceRemapper.discriminator = undefined;
    LogsTraceRemapper.attributeTypeMap = {
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
            "type": "LogsTraceRemapperType",
            "format": ""
        }
    };
    return LogsTraceRemapper;
}());
exports.LogsTraceRemapper = LogsTraceRemapper;
//# sourceMappingURL=LogsTraceRemapper.js.map