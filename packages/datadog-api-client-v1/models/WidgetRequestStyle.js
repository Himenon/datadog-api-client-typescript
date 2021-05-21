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
exports.WidgetRequestStyle = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Define request widget style.
*/
var WidgetRequestStyle = /** @class */ (function () {
    function WidgetRequestStyle() {
    }
    WidgetRequestStyle.getAttributeTypeMap = function () {
        return WidgetRequestStyle.attributeTypeMap;
    };
    WidgetRequestStyle.deserialize = function (data) {
        var res = new WidgetRequestStyle();
        if (['dashed', 'dotted', 'solid', undefined].includes(data.line_type)) {
            res.lineType = data.line_type;
        }
        else {
            throw TypeError("invalid enum value " + data.line_type + " for line_type");
        }
        if (['normal', 'thick', 'thin', undefined].includes(data.line_width)) {
            res.lineWidth = data.line_width;
        }
        else {
            throw TypeError("invalid enum value " + data.line_width + " for line_width");
        }
        res.palette = ObjectSerializer_1.ObjectSerializer.deserialize(data.palette, "string", "");
        return res;
    };
    WidgetRequestStyle.serialize = function (data) {
        var attributeTypes = WidgetRequestStyle.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (['dashed', 'dotted', 'solid', undefined].includes(data.lineType)) {
            res.line_type = data.lineType;
        }
        else {
            throw TypeError("invalid enum value " + data.lineType + " for lineType");
        }
        if (['normal', 'thick', 'thin', undefined].includes(data.lineWidth)) {
            res.line_width = data.lineWidth;
        }
        else {
            throw TypeError("invalid enum value " + data.lineWidth + " for lineWidth");
        }
        res.palette = ObjectSerializer_1.ObjectSerializer.serialize(data.palette, "string", "");
        return res;
    };
    WidgetRequestStyle.discriminator = undefined;
    WidgetRequestStyle.attributeTypeMap = {
        "lineType": {
            "baseName": "line_type",
            "type": "WidgetLineType",
            "format": ""
        },
        "lineWidth": {
            "baseName": "line_width",
            "type": "WidgetLineWidth",
            "format": ""
        },
        "palette": {
            "baseName": "palette",
            "type": "string",
            "format": ""
        }
    };
    return WidgetRequestStyle;
}());
exports.WidgetRequestStyle = WidgetRequestStyle;
//# sourceMappingURL=WidgetRequestStyle.js.map