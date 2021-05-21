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
exports.LogsLookupProcessor = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Use the Lookup Processor to define a mapping between a log attribute and a human readable value saved in the processors mapping table. For example, you can use the Lookup Processor to map an internal service ID into a human readable service name. Alternatively, you could also use it to check if the MAC address that just attempted to connect to the production environment belongs to your list of stolen machines.
*/
var LogsLookupProcessor = /** @class */ (function () {
    function LogsLookupProcessor() {
    }
    LogsLookupProcessor.getAttributeTypeMap = function () {
        return LogsLookupProcessor.attributeTypeMap;
    };
    LogsLookupProcessor.deserialize = function (data) {
        var res = new LogsLookupProcessor();
        res.defaultLookup = ObjectSerializer_1.ObjectSerializer.deserialize(data.default_lookup, "string", "");
        res.isEnabled = ObjectSerializer_1.ObjectSerializer.deserialize(data.is_enabled, "boolean", "");
        if (data.lookup_table === undefined) {
            throw new TypeError("missing required attribute 'lookup_table' on 'LogsLookupProcessor' object");
        }
        res.lookupTable = ObjectSerializer_1.ObjectSerializer.deserialize(data.lookup_table, "Array<string>", "");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        if (data.source === undefined) {
            throw new TypeError("missing required attribute 'source' on 'LogsLookupProcessor' object");
        }
        res.source = ObjectSerializer_1.ObjectSerializer.deserialize(data.source, "string", "");
        if (data.target === undefined) {
            throw new TypeError("missing required attribute 'target' on 'LogsLookupProcessor' object");
        }
        res.target = ObjectSerializer_1.ObjectSerializer.deserialize(data.target, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'LogsLookupProcessor' object");
        }
        if (['lookup-processor', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    LogsLookupProcessor.serialize = function (data) {
        var attributeTypes = LogsLookupProcessor.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.default_lookup = ObjectSerializer_1.ObjectSerializer.serialize(data.defaultLookup, "string", "");
        res.is_enabled = ObjectSerializer_1.ObjectSerializer.serialize(data.isEnabled, "boolean", "");
        if (data.lookupTable === undefined) {
            throw new TypeError("missing required attribute 'lookup_table' on 'LogsLookupProcessor' object");
        }
        res.lookup_table = ObjectSerializer_1.ObjectSerializer.serialize(data.lookupTable, "Array<string>", "");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        if (data.source === undefined) {
            throw new TypeError("missing required attribute 'source' on 'LogsLookupProcessor' object");
        }
        res.source = ObjectSerializer_1.ObjectSerializer.serialize(data.source, "string", "");
        if (data.target === undefined) {
            throw new TypeError("missing required attribute 'target' on 'LogsLookupProcessor' object");
        }
        res.target = ObjectSerializer_1.ObjectSerializer.serialize(data.target, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'LogsLookupProcessor' object");
        }
        if (['lookup-processor', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    LogsLookupProcessor.discriminator = undefined;
    LogsLookupProcessor.attributeTypeMap = {
        "defaultLookup": {
            "baseName": "default_lookup",
            "type": "string",
            "format": ""
        },
        "isEnabled": {
            "baseName": "is_enabled",
            "type": "boolean",
            "format": ""
        },
        "lookupTable": {
            "baseName": "lookup_table",
            "type": "Array<string>",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "source": {
            "baseName": "source",
            "type": "string",
            "format": ""
        },
        "target": {
            "baseName": "target",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "LogsLookupProcessorType",
            "format": ""
        }
    };
    return LogsLookupProcessor;
}());
exports.LogsLookupProcessor = LogsLookupProcessor;
//# sourceMappingURL=LogsLookupProcessor.js.map