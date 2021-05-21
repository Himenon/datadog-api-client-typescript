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
exports.MetricAllTagsAttributes = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object containing the definition of a metric's tags.
*/
var MetricAllTagsAttributes = /** @class */ (function () {
    function MetricAllTagsAttributes() {
    }
    MetricAllTagsAttributes.getAttributeTypeMap = function () {
        return MetricAllTagsAttributes.attributeTypeMap;
    };
    MetricAllTagsAttributes.deserialize = function (data) {
        var res = new MetricAllTagsAttributes();
        res.tags = ObjectSerializer_1.ObjectSerializer.deserialize(data.tags, "Array<string>", "");
        return res;
    };
    MetricAllTagsAttributes.serialize = function (data) {
        var attributeTypes = MetricAllTagsAttributes.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.tags = ObjectSerializer_1.ObjectSerializer.serialize(data.tags, "Array<string>", "");
        return res;
    };
    MetricAllTagsAttributes.discriminator = undefined;
    MetricAllTagsAttributes.attributeTypeMap = {
        "tags": {
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        }
    };
    return MetricAllTagsAttributes;
}());
exports.MetricAllTagsAttributes = MetricAllTagsAttributes;
//# sourceMappingURL=MetricAllTagsAttributes.js.map