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
exports.LogsAggregateRequestPage = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Paging settings
*/
var LogsAggregateRequestPage = /** @class */ (function () {
    function LogsAggregateRequestPage() {
    }
    LogsAggregateRequestPage.getAttributeTypeMap = function () {
        return LogsAggregateRequestPage.attributeTypeMap;
    };
    LogsAggregateRequestPage.deserialize = function (data) {
        var res = new LogsAggregateRequestPage();
        res.cursor = ObjectSerializer_1.ObjectSerializer.deserialize(data.cursor, "string", "");
        return res;
    };
    LogsAggregateRequestPage.serialize = function (data) {
        var attributeTypes = LogsAggregateRequestPage.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.cursor = ObjectSerializer_1.ObjectSerializer.serialize(data.cursor, "string", "");
        return res;
    };
    LogsAggregateRequestPage.discriminator = undefined;
    LogsAggregateRequestPage.attributeTypeMap = {
        "cursor": {
            "baseName": "cursor",
            "type": "string",
            "format": ""
        }
    };
    return LogsAggregateRequestPage;
}());
exports.LogsAggregateRequestPage = LogsAggregateRequestPage;
//# sourceMappingURL=LogsAggregateRequestPage.js.map