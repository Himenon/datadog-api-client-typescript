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
exports.LogsPipelinesOrder = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object containing the ordered list of pipeline IDs.
*/
var LogsPipelinesOrder = /** @class */ (function () {
    function LogsPipelinesOrder() {
    }
    LogsPipelinesOrder.getAttributeTypeMap = function () {
        return LogsPipelinesOrder.attributeTypeMap;
    };
    LogsPipelinesOrder.deserialize = function (data) {
        var res = new LogsPipelinesOrder();
        if (data.pipeline_ids === undefined) {
            throw new TypeError("missing required attribute 'pipeline_ids' on 'LogsPipelinesOrder' object");
        }
        res.pipelineIds = ObjectSerializer_1.ObjectSerializer.deserialize(data.pipeline_ids, "Array<string>", "");
        return res;
    };
    LogsPipelinesOrder.serialize = function (data) {
        var attributeTypes = LogsPipelinesOrder.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.pipelineIds === undefined) {
            throw new TypeError("missing required attribute 'pipeline_ids' on 'LogsPipelinesOrder' object");
        }
        res.pipeline_ids = ObjectSerializer_1.ObjectSerializer.serialize(data.pipelineIds, "Array<string>", "");
        return res;
    };
    LogsPipelinesOrder.discriminator = undefined;
    LogsPipelinesOrder.attributeTypeMap = {
        "pipelineIds": {
            "baseName": "pipeline_ids",
            "type": "Array<string>",
            "format": ""
        }
    };
    return LogsPipelinesOrder;
}());
exports.LogsPipelinesOrder = LogsPipelinesOrder;
//# sourceMappingURL=LogsPipelinesOrder.js.map