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
exports.UsageIncidentManagementHour = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Incident management usage for a given organization for a given hour.
*/
var UsageIncidentManagementHour = /** @class */ (function () {
    function UsageIncidentManagementHour() {
    }
    UsageIncidentManagementHour.getAttributeTypeMap = function () {
        return UsageIncidentManagementHour.attributeTypeMap;
    };
    UsageIncidentManagementHour.deserialize = function (data) {
        var res = new UsageIncidentManagementHour();
        res.hour = ObjectSerializer_1.ObjectSerializer.deserialize(data.hour, "Date", "date-time");
        res.monthlyActiveUsers = ObjectSerializer_1.ObjectSerializer.deserialize(data.monthly_active_users, "number", "int64");
        return res;
    };
    UsageIncidentManagementHour.serialize = function (data) {
        var attributeTypes = UsageIncidentManagementHour.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.hour = ObjectSerializer_1.ObjectSerializer.serialize(data.hour, "Date", "date-time");
        res.monthly_active_users = ObjectSerializer_1.ObjectSerializer.serialize(data.monthlyActiveUsers, "number", "int64");
        return res;
    };
    UsageIncidentManagementHour.discriminator = undefined;
    UsageIncidentManagementHour.attributeTypeMap = {
        "hour": {
            "baseName": "hour",
            "type": "Date",
            "format": "date-time"
        },
        "monthlyActiveUsers": {
            "baseName": "monthly_active_users",
            "type": "number",
            "format": "int64"
        }
    };
    return UsageIncidentManagementHour;
}());
exports.UsageIncidentManagementHour = UsageIncidentManagementHour;
//# sourceMappingURL=UsageIncidentManagementHour.js.map