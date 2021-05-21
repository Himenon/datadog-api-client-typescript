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
exports.FormulaAndFunctionEventQueryDefinitionSearch = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Search options.
*/
var FormulaAndFunctionEventQueryDefinitionSearch = /** @class */ (function () {
    function FormulaAndFunctionEventQueryDefinitionSearch() {
    }
    FormulaAndFunctionEventQueryDefinitionSearch.getAttributeTypeMap = function () {
        return FormulaAndFunctionEventQueryDefinitionSearch.attributeTypeMap;
    };
    FormulaAndFunctionEventQueryDefinitionSearch.deserialize = function (data) {
        var res = new FormulaAndFunctionEventQueryDefinitionSearch();
        if (data.query === undefined) {
            throw new TypeError("missing required attribute 'query' on 'FormulaAndFunctionEventQueryDefinitionSearch' object");
        }
        res.query = ObjectSerializer_1.ObjectSerializer.deserialize(data.query, "string", "");
        return res;
    };
    FormulaAndFunctionEventQueryDefinitionSearch.serialize = function (data) {
        var attributeTypes = FormulaAndFunctionEventQueryDefinitionSearch.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.query === undefined) {
            throw new TypeError("missing required attribute 'query' on 'FormulaAndFunctionEventQueryDefinitionSearch' object");
        }
        res.query = ObjectSerializer_1.ObjectSerializer.serialize(data.query, "string", "");
        return res;
    };
    FormulaAndFunctionEventQueryDefinitionSearch.discriminator = undefined;
    FormulaAndFunctionEventQueryDefinitionSearch.attributeTypeMap = {
        "query": {
            "baseName": "query",
            "type": "string",
            "format": ""
        }
    };
    return FormulaAndFunctionEventQueryDefinitionSearch;
}());
exports.FormulaAndFunctionEventQueryDefinitionSearch = FormulaAndFunctionEventQueryDefinitionSearch;
//# sourceMappingURL=FormulaAndFunctionEventQueryDefinitionSearch.js.map