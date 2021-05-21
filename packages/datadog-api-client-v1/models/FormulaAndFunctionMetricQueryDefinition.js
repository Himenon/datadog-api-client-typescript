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
exports.FormulaAndFunctionMetricQueryDefinition = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A formula and functions metrics query.
*/
var FormulaAndFunctionMetricQueryDefinition = /** @class */ (function () {
    function FormulaAndFunctionMetricQueryDefinition() {
    }
    FormulaAndFunctionMetricQueryDefinition.getAttributeTypeMap = function () {
        return FormulaAndFunctionMetricQueryDefinition.attributeTypeMap;
    };
    FormulaAndFunctionMetricQueryDefinition.deserialize = function (data) {
        var res = new FormulaAndFunctionMetricQueryDefinition();
        if (['avg', 'min', 'max', 'sum', 'last', 'area', 'l2norm', undefined].includes(data.aggregator)) {
            res.aggregator = data.aggregator;
        }
        else {
            throw TypeError("invalid enum value " + data.aggregator + " for aggregator");
        }
        if (data.data_source === undefined) {
            throw new TypeError("missing required attribute 'data_source' on 'FormulaAndFunctionMetricQueryDefinition' object");
        }
        if (['metrics', undefined].includes(data.data_source)) {
            res.dataSource = data.data_source;
        }
        else {
            throw TypeError("invalid enum value " + data.data_source + " for data_source");
        }
        if (data.name === undefined) {
            throw new TypeError("missing required attribute 'name' on 'FormulaAndFunctionMetricQueryDefinition' object");
        }
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        if (data.query === undefined) {
            throw new TypeError("missing required attribute 'query' on 'FormulaAndFunctionMetricQueryDefinition' object");
        }
        res.query = ObjectSerializer_1.ObjectSerializer.deserialize(data.query, "string", "");
        return res;
    };
    FormulaAndFunctionMetricQueryDefinition.serialize = function (data) {
        var attributeTypes = FormulaAndFunctionMetricQueryDefinition.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (['avg', 'min', 'max', 'sum', 'last', 'area', 'l2norm', undefined].includes(data.aggregator)) {
            res.aggregator = data.aggregator;
        }
        else {
            throw TypeError("invalid enum value " + data.aggregator + " for aggregator");
        }
        if (data.dataSource === undefined) {
            throw new TypeError("missing required attribute 'data_source' on 'FormulaAndFunctionMetricQueryDefinition' object");
        }
        if (['metrics', undefined].includes(data.dataSource)) {
            res.data_source = data.dataSource;
        }
        else {
            throw TypeError("invalid enum value " + data.dataSource + " for dataSource");
        }
        if (data.name === undefined) {
            throw new TypeError("missing required attribute 'name' on 'FormulaAndFunctionMetricQueryDefinition' object");
        }
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        if (data.query === undefined) {
            throw new TypeError("missing required attribute 'query' on 'FormulaAndFunctionMetricQueryDefinition' object");
        }
        res.query = ObjectSerializer_1.ObjectSerializer.serialize(data.query, "string", "");
        return res;
    };
    FormulaAndFunctionMetricQueryDefinition.discriminator = undefined;
    FormulaAndFunctionMetricQueryDefinition.attributeTypeMap = {
        "aggregator": {
            "baseName": "aggregator",
            "type": "FormulaAndFunctionMetricAggregation",
            "format": ""
        },
        "dataSource": {
            "baseName": "data_source",
            "type": "FormulaAndFunctionMetricDataSource",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "query": {
            "baseName": "query",
            "type": "string",
            "format": ""
        }
    };
    return FormulaAndFunctionMetricQueryDefinition;
}());
exports.FormulaAndFunctionMetricQueryDefinition = FormulaAndFunctionMetricQueryDefinition;
//# sourceMappingURL=FormulaAndFunctionMetricQueryDefinition.js.map