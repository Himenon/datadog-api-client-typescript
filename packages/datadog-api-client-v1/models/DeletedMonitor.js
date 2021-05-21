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
exports.DeletedMonitor = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Response from the delete monitor call.
*/
var DeletedMonitor = /** @class */ (function () {
    function DeletedMonitor() {
    }
    DeletedMonitor.getAttributeTypeMap = function () {
        return DeletedMonitor.attributeTypeMap;
    };
    DeletedMonitor.deserialize = function (data) {
        var res = new DeletedMonitor();
        res.deletedMonitorId = ObjectSerializer_1.ObjectSerializer.deserialize(data.deleted_monitor_id, "number", "int64");
        return res;
    };
    DeletedMonitor.serialize = function (data) {
        var attributeTypes = DeletedMonitor.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.deleted_monitor_id = ObjectSerializer_1.ObjectSerializer.serialize(data.deletedMonitorId, "number", "int64");
        return res;
    };
    DeletedMonitor.discriminator = undefined;
    DeletedMonitor.attributeTypeMap = {
        "deletedMonitorId": {
            "baseName": "deleted_monitor_id",
            "type": "number",
            "format": "int64"
        }
    };
    return DeletedMonitor;
}());
exports.DeletedMonitor = DeletedMonitor;
//# sourceMappingURL=DeletedMonitor.js.map