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
exports.HTTPLogItem = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Logs that are sent over HTTP.
*/
var HTTPLogItem = /** @class */ (function () {
    function HTTPLogItem() {
    }
    HTTPLogItem.getAttributeTypeMap = function () {
        return HTTPLogItem.attributeTypeMap;
    };
    HTTPLogItem.deserialize = function (data) {
        var res = new HTTPLogItem();
        res.ddsource = ObjectSerializer_1.ObjectSerializer.deserialize(data.ddsource, "string", "");
        res.ddtags = ObjectSerializer_1.ObjectSerializer.deserialize(data.ddtags, "string", "");
        res.hostname = ObjectSerializer_1.ObjectSerializer.deserialize(data.hostname, "string", "");
        res.message = ObjectSerializer_1.ObjectSerializer.deserialize(data.message, "string", "");
        res.service = ObjectSerializer_1.ObjectSerializer.deserialize(data.service, "string", "");
        return res;
    };
    HTTPLogItem.serialize = function (data) {
        var attributeTypes = HTTPLogItem.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.ddsource = ObjectSerializer_1.ObjectSerializer.serialize(data.ddsource, "string", "");
        res.ddtags = ObjectSerializer_1.ObjectSerializer.serialize(data.ddtags, "string", "");
        res.hostname = ObjectSerializer_1.ObjectSerializer.serialize(data.hostname, "string", "");
        res.message = ObjectSerializer_1.ObjectSerializer.serialize(data.message, "string", "");
        res.service = ObjectSerializer_1.ObjectSerializer.serialize(data.service, "string", "");
        return res;
    };
    HTTPLogItem.discriminator = undefined;
    HTTPLogItem.attributeTypeMap = {
        "ddsource": {
            "baseName": "ddsource",
            "type": "string",
            "format": ""
        },
        "ddtags": {
            "baseName": "ddtags",
            "type": "string",
            "format": ""
        },
        "hostname": {
            "baseName": "hostname",
            "type": "string",
            "format": ""
        },
        "message": {
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        "service": {
            "baseName": "service",
            "type": "string",
            "format": ""
        }
    };
    return HTTPLogItem;
}());
exports.HTTPLogItem = HTTPLogItem;
//# sourceMappingURL=HTTPLogItem.js.map