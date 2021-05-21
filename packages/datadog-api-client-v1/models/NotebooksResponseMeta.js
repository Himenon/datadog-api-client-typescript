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
exports.NotebooksResponseMeta = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Metadata returned by the API.
*/
var NotebooksResponseMeta = /** @class */ (function () {
    function NotebooksResponseMeta() {
    }
    NotebooksResponseMeta.getAttributeTypeMap = function () {
        return NotebooksResponseMeta.attributeTypeMap;
    };
    NotebooksResponseMeta.deserialize = function (data) {
        var res = new NotebooksResponseMeta();
        res.page = ObjectSerializer_1.ObjectSerializer.deserialize(data.page, "NotebooksResponsePage", "");
        return res;
    };
    NotebooksResponseMeta.serialize = function (data) {
        var attributeTypes = NotebooksResponseMeta.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.page = ObjectSerializer_1.ObjectSerializer.serialize(data.page, "NotebooksResponsePage", "");
        return res;
    };
    NotebooksResponseMeta.discriminator = undefined;
    NotebooksResponseMeta.attributeTypeMap = {
        "page": {
            "baseName": "page",
            "type": "NotebooksResponsePage",
            "format": ""
        }
    };
    return NotebooksResponseMeta;
}());
exports.NotebooksResponseMeta = NotebooksResponseMeta;
//# sourceMappingURL=NotebooksResponseMeta.js.map