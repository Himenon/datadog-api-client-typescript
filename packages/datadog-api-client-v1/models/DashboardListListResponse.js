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
exports.DashboardListListResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Information on your dashboard lists.
*/
var DashboardListListResponse = /** @class */ (function () {
    function DashboardListListResponse() {
    }
    DashboardListListResponse.getAttributeTypeMap = function () {
        return DashboardListListResponse.attributeTypeMap;
    };
    DashboardListListResponse.deserialize = function (data) {
        var res = new DashboardListListResponse();
        res.dashboardLists = ObjectSerializer_1.ObjectSerializer.deserialize(data.dashboard_lists, "Array<DashboardList>", "");
        return res;
    };
    DashboardListListResponse.serialize = function (data) {
        var attributeTypes = DashboardListListResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.dashboard_lists = ObjectSerializer_1.ObjectSerializer.serialize(data.dashboardLists, "Array<DashboardList>", "");
        return res;
    };
    DashboardListListResponse.discriminator = undefined;
    DashboardListListResponse.attributeTypeMap = {
        "dashboardLists": {
            "baseName": "dashboard_lists",
            "type": "Array<DashboardList>",
            "format": ""
        }
    };
    return DashboardListListResponse;
}());
exports.DashboardListListResponse = DashboardListListResponse;
//# sourceMappingURL=DashboardListListResponse.js.map