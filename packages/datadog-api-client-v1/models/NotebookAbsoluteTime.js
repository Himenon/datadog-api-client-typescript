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
exports.NotebookAbsoluteTime = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Absolute timeframe.
*/
var NotebookAbsoluteTime = /** @class */ (function () {
    function NotebookAbsoluteTime() {
    }
    NotebookAbsoluteTime.getAttributeTypeMap = function () {
        return NotebookAbsoluteTime.attributeTypeMap;
    };
    NotebookAbsoluteTime.deserialize = function (data) {
        var res = new NotebookAbsoluteTime();
        if (data.end === undefined) {
            throw new TypeError("missing required attribute 'end' on 'NotebookAbsoluteTime' object");
        }
        res.end = ObjectSerializer_1.ObjectSerializer.deserialize(data.end, "Date", "date-time");
        res.live = ObjectSerializer_1.ObjectSerializer.deserialize(data.live, "boolean", "");
        if (data.start === undefined) {
            throw new TypeError("missing required attribute 'start' on 'NotebookAbsoluteTime' object");
        }
        res.start = ObjectSerializer_1.ObjectSerializer.deserialize(data.start, "Date", "date-time");
        return res;
    };
    NotebookAbsoluteTime.serialize = function (data) {
        var attributeTypes = NotebookAbsoluteTime.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.end === undefined) {
            throw new TypeError("missing required attribute 'end' on 'NotebookAbsoluteTime' object");
        }
        res.end = ObjectSerializer_1.ObjectSerializer.serialize(data.end, "Date", "date-time");
        res.live = ObjectSerializer_1.ObjectSerializer.serialize(data.live, "boolean", "");
        if (data.start === undefined) {
            throw new TypeError("missing required attribute 'start' on 'NotebookAbsoluteTime' object");
        }
        res.start = ObjectSerializer_1.ObjectSerializer.serialize(data.start, "Date", "date-time");
        return res;
    };
    NotebookAbsoluteTime.discriminator = undefined;
    NotebookAbsoluteTime.attributeTypeMap = {
        "end": {
            "baseName": "end",
            "type": "Date",
            "format": "date-time"
        },
        "live": {
            "baseName": "live",
            "type": "boolean",
            "format": ""
        },
        "start": {
            "baseName": "start",
            "type": "Date",
            "format": "date-time"
        }
    };
    return NotebookAbsoluteTime;
}());
exports.NotebookAbsoluteTime = NotebookAbsoluteTime;
//# sourceMappingURL=NotebookAbsoluteTime.js.map