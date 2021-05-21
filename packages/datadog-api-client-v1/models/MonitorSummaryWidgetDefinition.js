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
exports.MonitorSummaryWidgetDefinition = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The monitor summary widget displays a summary view of all your Datadog monitors, or a subset based on a query. Only available on FREE layout dashboards.
*/
var MonitorSummaryWidgetDefinition = /** @class */ (function () {
    function MonitorSummaryWidgetDefinition() {
    }
    MonitorSummaryWidgetDefinition.getAttributeTypeMap = function () {
        return MonitorSummaryWidgetDefinition.attributeTypeMap;
    };
    MonitorSummaryWidgetDefinition.deserialize = function (data) {
        var res = new MonitorSummaryWidgetDefinition();
        if (['background', 'text', undefined].includes(data.color_preference)) {
            res.colorPreference = data.color_preference;
        }
        else {
            throw TypeError("invalid enum value " + data.color_preference + " for color_preference");
        }
        res.count = ObjectSerializer_1.ObjectSerializer.deserialize(data.count, "number", "int64");
        if (['counts', 'countsAndList', 'list', undefined].includes(data.display_format)) {
            res.displayFormat = data.display_format;
        }
        else {
            throw TypeError("invalid enum value " + data.display_format + " for display_format");
        }
        res.hideZeroCounts = ObjectSerializer_1.ObjectSerializer.deserialize(data.hide_zero_counts, "boolean", "");
        if (data.query === undefined) {
            throw new TypeError("missing required attribute 'query' on 'MonitorSummaryWidgetDefinition' object");
        }
        res.query = ObjectSerializer_1.ObjectSerializer.deserialize(data.query, "string", "");
        res.showLastTriggered = ObjectSerializer_1.ObjectSerializer.deserialize(data.show_last_triggered, "boolean", "");
        if (['name', 'group', 'status', 'tags', 'triggered', 'group,asc', 'group,desc', 'name,asc', 'name,desc', 'status,asc', 'status,desc', 'tags,asc', 'tags,desc', 'triggered,asc', 'triggered,desc', undefined].includes(data.sort)) {
            res.sort = data.sort;
        }
        else {
            throw TypeError("invalid enum value " + data.sort + " for sort");
        }
        res.start = ObjectSerializer_1.ObjectSerializer.deserialize(data.start, "number", "int64");
        if (['monitors', 'groups', 'combined', undefined].includes(data.summary_type)) {
            res.summaryType = data.summary_type;
        }
        else {
            throw TypeError("invalid enum value " + data.summary_type + " for summary_type");
        }
        res.title = ObjectSerializer_1.ObjectSerializer.deserialize(data.title, "string", "");
        if (['center', 'left', 'right', undefined].includes(data.title_align)) {
            res.titleAlign = data.title_align;
        }
        else {
            throw TypeError("invalid enum value " + data.title_align + " for title_align");
        }
        res.titleSize = ObjectSerializer_1.ObjectSerializer.deserialize(data.title_size, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'MonitorSummaryWidgetDefinition' object");
        }
        if (['manage_status', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    MonitorSummaryWidgetDefinition.serialize = function (data) {
        var attributeTypes = MonitorSummaryWidgetDefinition.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (['background', 'text', undefined].includes(data.colorPreference)) {
            res.color_preference = data.colorPreference;
        }
        else {
            throw TypeError("invalid enum value " + data.colorPreference + " for colorPreference");
        }
        res.count = ObjectSerializer_1.ObjectSerializer.serialize(data.count, "number", "int64");
        if (['counts', 'countsAndList', 'list', undefined].includes(data.displayFormat)) {
            res.display_format = data.displayFormat;
        }
        else {
            throw TypeError("invalid enum value " + data.displayFormat + " for displayFormat");
        }
        res.hide_zero_counts = ObjectSerializer_1.ObjectSerializer.serialize(data.hideZeroCounts, "boolean", "");
        if (data.query === undefined) {
            throw new TypeError("missing required attribute 'query' on 'MonitorSummaryWidgetDefinition' object");
        }
        res.query = ObjectSerializer_1.ObjectSerializer.serialize(data.query, "string", "");
        res.show_last_triggered = ObjectSerializer_1.ObjectSerializer.serialize(data.showLastTriggered, "boolean", "");
        if (['name', 'group', 'status', 'tags', 'triggered', 'group,asc', 'group,desc', 'name,asc', 'name,desc', 'status,asc', 'status,desc', 'tags,asc', 'tags,desc', 'triggered,asc', 'triggered,desc', undefined].includes(data.sort)) {
            res.sort = data.sort;
        }
        else {
            throw TypeError("invalid enum value " + data.sort + " for sort");
        }
        res.start = ObjectSerializer_1.ObjectSerializer.serialize(data.start, "number", "int64");
        if (['monitors', 'groups', 'combined', undefined].includes(data.summaryType)) {
            res.summary_type = data.summaryType;
        }
        else {
            throw TypeError("invalid enum value " + data.summaryType + " for summaryType");
        }
        res.title = ObjectSerializer_1.ObjectSerializer.serialize(data.title, "string", "");
        if (['center', 'left', 'right', undefined].includes(data.titleAlign)) {
            res.title_align = data.titleAlign;
        }
        else {
            throw TypeError("invalid enum value " + data.titleAlign + " for titleAlign");
        }
        res.title_size = ObjectSerializer_1.ObjectSerializer.serialize(data.titleSize, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'MonitorSummaryWidgetDefinition' object");
        }
        if (['manage_status', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    MonitorSummaryWidgetDefinition.discriminator = undefined;
    MonitorSummaryWidgetDefinition.attributeTypeMap = {
        "colorPreference": {
            "baseName": "color_preference",
            "type": "WidgetColorPreference",
            "format": ""
        },
        "count": {
            "baseName": "count",
            "type": "number",
            "format": "int64"
        },
        "displayFormat": {
            "baseName": "display_format",
            "type": "WidgetMonitorSummaryDisplayFormat",
            "format": ""
        },
        "hideZeroCounts": {
            "baseName": "hide_zero_counts",
            "type": "boolean",
            "format": ""
        },
        "query": {
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        "showLastTriggered": {
            "baseName": "show_last_triggered",
            "type": "boolean",
            "format": ""
        },
        "sort": {
            "baseName": "sort",
            "type": "WidgetMonitorSummarySort",
            "format": ""
        },
        "start": {
            "baseName": "start",
            "type": "number",
            "format": "int64"
        },
        "summaryType": {
            "baseName": "summary_type",
            "type": "WidgetSummaryType",
            "format": ""
        },
        "title": {
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        "titleAlign": {
            "baseName": "title_align",
            "type": "WidgetTextAlign",
            "format": ""
        },
        "titleSize": {
            "baseName": "title_size",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "MonitorSummaryWidgetDefinitionType",
            "format": ""
        }
    };
    return MonitorSummaryWidgetDefinition;
}());
exports.MonitorSummaryWidgetDefinition = MonitorSummaryWidgetDefinition;
//# sourceMappingURL=MonitorSummaryWidgetDefinition.js.map