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
exports.NotebookCellResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The description of a notebook cell response.
*/
var NotebookCellResponse = /** @class */ (function () {
    function NotebookCellResponse() {
    }
    NotebookCellResponse.getAttributeTypeMap = function () {
        return NotebookCellResponse.attributeTypeMap;
    };
    NotebookCellResponse.deserialize = function (data) {
        var res = new NotebookCellResponse();
        if (data.attributes === undefined) {
            throw new TypeError("missing required attribute 'attributes' on 'NotebookCellResponse' object");
        }
        res.attributes = ObjectSerializer_1.ObjectSerializer.deserialize(data.attributes, "NotebookCellResponseAttributes", "");
        if (data.id === undefined) {
            throw new TypeError("missing required attribute 'id' on 'NotebookCellResponse' object");
        }
        res.id = ObjectSerializer_1.ObjectSerializer.deserialize(data.id, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'NotebookCellResponse' object");
        }
        if (['notebook_cells', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    NotebookCellResponse.serialize = function (data) {
        var attributeTypes = NotebookCellResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.attributes === undefined) {
            throw new TypeError("missing required attribute 'attributes' on 'NotebookCellResponse' object");
        }
        res.attributes = ObjectSerializer_1.ObjectSerializer.serialize(data.attributes, "NotebookCellResponseAttributes", "");
        if (data.id === undefined) {
            throw new TypeError("missing required attribute 'id' on 'NotebookCellResponse' object");
        }
        res.id = ObjectSerializer_1.ObjectSerializer.serialize(data.id, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'NotebookCellResponse' object");
        }
        if (['notebook_cells', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    NotebookCellResponse.discriminator = undefined;
    NotebookCellResponse.attributeTypeMap = {
        "attributes": {
            "baseName": "attributes",
            "type": "NotebookCellResponseAttributes",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "NotebookCellResourceType",
            "format": ""
        }
    };
    return NotebookCellResponse;
}());
exports.NotebookCellResponse = NotebookCellResponse;
//# sourceMappingURL=NotebookCellResponse.js.map