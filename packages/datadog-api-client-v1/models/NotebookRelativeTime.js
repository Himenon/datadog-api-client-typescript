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
exports.NotebookRelativeTime = void 0;
/**
* Relative timeframe.
*/
var NotebookRelativeTime = /** @class */ (function () {
    function NotebookRelativeTime() {
    }
    NotebookRelativeTime.getAttributeTypeMap = function () {
        return NotebookRelativeTime.attributeTypeMap;
    };
    NotebookRelativeTime.deserialize = function (data) {
        var res = new NotebookRelativeTime();
        if (data.live_span === undefined) {
            throw new TypeError("missing required attribute 'live_span' on 'NotebookRelativeTime' object");
        }
        if (['1m', '5m', '10m', '15m', '30m', '1h', '4h', '1d', '2d', '1w', '1mo', '3mo', '6mo', '1y', 'alert', undefined].includes(data.live_span)) {
            res.liveSpan = data.live_span;
        }
        else {
            throw TypeError("invalid enum value " + data.live_span + " for live_span");
        }
        return res;
    };
    NotebookRelativeTime.serialize = function (data) {
        var attributeTypes = NotebookRelativeTime.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.liveSpan === undefined) {
            throw new TypeError("missing required attribute 'live_span' on 'NotebookRelativeTime' object");
        }
        if (['1m', '5m', '10m', '15m', '30m', '1h', '4h', '1d', '2d', '1w', '1mo', '3mo', '6mo', '1y', 'alert', undefined].includes(data.liveSpan)) {
            res.live_span = data.liveSpan;
        }
        else {
            throw TypeError("invalid enum value " + data.liveSpan + " for liveSpan");
        }
        return res;
    };
    NotebookRelativeTime.discriminator = undefined;
    NotebookRelativeTime.attributeTypeMap = {
        "liveSpan": {
            "baseName": "live_span",
            "type": "WidgetLiveSpan",
            "format": ""
        }
    };
    return NotebookRelativeTime;
}());
exports.NotebookRelativeTime = NotebookRelativeTime;
//# sourceMappingURL=NotebookRelativeTime.js.map